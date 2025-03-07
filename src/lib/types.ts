import { type Locale } from "@/i18n.config";
import { type NextPage } from "next/types";

export type LocalizedPage = NextPage<{ params: Promise<{ locale: Locale }> }>;