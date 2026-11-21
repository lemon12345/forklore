"use client";

import LoginDialog from "@/components/auth/LoginDialog";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LoginButton() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Login");

  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const loginMode = process.env.NEXT_PUBLIC_LOGIN_MODE || "page";
    if (loginMode === "dialog") {
      setIsLoginDialogOpen(true);
      return;
    }

    const nextParam = pathname ? `?next=${encodeURIComponent(pathname)}` : "";
    router.push(`/login${nextParam}`);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleLogin}
        className="pill-primary pill-sm ml-1 inline-flex h-8 items-center justify-center rounded-full px-3 text-[14px] font-medium tracking-[-0.2px] transition-colors"
      >
        {t("Button.signIn")}
      </button>

      {process.env.NEXT_PUBLIC_LOGIN_MODE === "dialog" && (
        <LoginDialog
          open={isLoginDialogOpen}
          onOpenChange={setIsLoginDialogOpen}
        />
      )}
    </>
  );
}
