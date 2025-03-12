import { type Locale } from "@/config";
import { getTranslation } from "@/i18n.utils";
import { getAsset } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Navbar = async ({ locale }: { locale: Locale }) => {
  return (
    <nav className="bg-sidebar text-sidebar-foreground sticky top-0 left-0 z-50 w-full flex justify-between items-center px-2 py-2">
      {/* Left Section with 3 Links */}
      <section className="flex space-x-4">
        <Link href="/" className="text-lg font-semibold hover:underline">
          <Image width={40} height={40} src={getAsset('logo.svg')} alt="Logo" />
        </Link>
      </section>

      {/* Right Section with 3 Links */}
      <section className="flex space-x-4">
        <Link href="/blog" className="hover:underline">
          {await getTranslation(locale, "section.blog")}
        </Link>
        <Link href="/about" className="hover:underline">
          {await getTranslation(locale, "section.about_me")}
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
