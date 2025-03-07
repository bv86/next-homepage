import { type Locale } from "@/i18n.config";
import { getTranslation } from "@/i18n.utils";
import Link from "next/link";

const Navbar = async ({locale} : {locale: Locale}) => {
  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 left-0 z-50 w-full px-4 md:px-8 py-2 md:py-4">
      <div className="w-full flex justify-between items-center px-2 md:px-8 py-2">
        {/* Left Section with 3 Links */}
        <section className="flex space-x-4">
          <Link href="/" className="text-lg font-semibold hover:underline">
            VANNESSON.com
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
      </div>
    </nav>
  );
}

export default Navbar;
