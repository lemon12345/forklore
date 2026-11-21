/**
 * [INPUT]: Depends on @/actions/credits/admin for adjustUserCredits/
 *          getUserCreditsForAdmin, next-intl for useTranslations,
 *          @/components/ui for Dialog/Input/Label/Textarea/Button/Skeleton
 * [OUTPUT]: exports the AdjustCreditsDialog component (admins manually grant
 *           or deduct a user's credits; on success it calls onAdjusted and
 *           the caller decides which channel to refresh)
 * [POS]: The credit-adjustment interaction layer of admin/users, opened per
 *        row by the ActionsCell in Columns (callback refreshes the React
 *        Query table cache) and by [userId]/AdjustCreditsButton (callback
 *        refreshes the RSC cards); loads the balances on open, a positive
 *        delta adds purchased credits, a negative one deducts
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

"use client";

import {
  adjustUserCredits,
  getUserCreditsForAdmin,
} from "@/actions/credits/admin";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

interface CreditBalances {
  subscriptionCredits: number;
  purchasedCredits: number;
  totalCredits: number;
}

interface AdjustCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  userEmail: string;
  /** Fired after a successful adjustment: the new balance is the server's call and cannot be guessed, so the caller refetches */
  onAdjusted?: () => void;
}

export function AdjustCreditsDialog({
  open,
  onOpenChange,
  userId,
  userEmail,
  onAdjusted,
}: AdjustCreditsDialogProps) {
  const t = useTranslations("Users.adjustCredits");
  const [isPending, startTransition] = useTransition();

  const [balances, setBalances] = useState<CreditBalances | null>(null);
  const [isLoadingBalances, setIsLoadingBalances] = useState(false);
  const [deltaInput, setDeltaInput] = useState("");
  const [reason, setReason] = useState("");

  // ── load balances whenever the dialog opens ──
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setIsLoadingBalances(true);
    setBalances(null);

    getUserCreditsForAdmin({ userId })
      .then((res) => {
        if (cancelled) return;
        if (res.success && res.data) {
          setBalances(res.data);
        } else {
          toast.error(t("loadFailed"), {
            description: res.success ? undefined : res.error,
          });
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoadingBalances(false);
      });

    return () => {
      cancelled = true;
    };
    // `t` is deliberately absent: next-intl rebuilds it whenever the layout
    // re-renders, which would re-enter this effect on every RSC pass. Locale
    // changes remount the tree, so the closure can never go stale.
  }, [open, userId]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setDeltaInput("");
      setReason("");
    }
    onOpenChange(isOpen);
  };

  const handleConfirm = () => {
    const delta = Number(deltaInput);
    if (!Number.isInteger(delta) || delta === 0) {
      toast.error(t("invalidDelta"));
      return;
    }
    if (!reason.trim()) {
      toast.error(t("reasonRequired"));
      return;
    }

    startTransition(async () => {
      const res = await adjustUserCredits({ userId, delta, reason });
      if (res.success && res.data) {
        toast.success(t("success", { total: res.data.totalCredits }));
        handleOpenChange(false);
        onAdjusted?.();
      } else {
        toast.error(t("failed"), {
          description: res.success ? undefined : res.error,
        });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>
            {t("description", { email: userEmail })}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* ── current balances ── */}
          <div className="rounded-md border p-3 text-sm space-y-1">
            <p className="font-medium">{t("currentBalance")}</p>
            {isLoadingBalances || !balances ? (
              <div className="space-y-1.5 pt-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
              </div>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t("subscription")}
                  </span>
                  <span className="tabular-nums">
                    {balances.subscriptionCredits}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t("purchased")}
                  </span>
                  <span className="tabular-nums">
                    {balances.purchasedCredits}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>{t("total")}</span>
                  <span className="tabular-nums">{balances.totalCredits}</span>
                </div>
              </>
            )}
          </div>

          {/* ── delta ── */}
          <div className="space-y-2">
            <Label htmlFor={`credits-delta-${userId}`}>{t("deltaLabel")}</Label>
            <Input
              id={`credits-delta-${userId}`}
              type="number"
              step="1"
              placeholder={t("deltaPlaceholder")}
              value={deltaInput}
              onChange={(e) => setDeltaInput(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">{t("deltaHint")}</p>
          </div>

          {/* ── reason ── */}
          <div className="space-y-2">
            <Label htmlFor={`credits-reason-${userId}`}>
              {t("reasonLabel")}
            </Label>
            <Textarea
              id={`credits-reason-${userId}`}
              placeholder={t("reasonPlaceholder")}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isPending}
          >
            {t("cancel")}
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isPending || !deltaInput || !reason.trim()}
          >
            {isPending ? t("processing") : t("confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
