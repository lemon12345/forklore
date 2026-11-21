/**
 * [INPUT]: Depends on ./Columns' columns, ./DataTable's CreditsDataTable,
 *          @/lib/metadata's constructMetadata, next-intl's getTranslations
 * [OUTPUT]: exports default AdminCreditsPage, generateMetadata
 * [POS]: The route entry of admin/credits (Server Component) — metadata and
 *        composition only
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { columns } from "./Columns";
import { CreditsDataTable } from "./DataTable";

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Credits",
  });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/dashboard/admin/credits`,
  });
}

const PAGE_SIZE = 100;

export default function AdminCreditsPage() {
  return (
    <div className="flex flex-col flex-1 min-h-0 gap-4">
      <CreditsDataTable columns={columns} pageSize={PAGE_SIZE} />
    </div>
  );
}
