import { type Locale } from "@/config";
import { getTranslation } from "@/i18n.utils";
import Link from "next/link";

const Footer = async ({ locale }: { locale: Locale }) => {

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="flex flex-row justify-between items-center p-2">
        {/* Social Media Section */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com/sachaka86/" className="hover:underline" target="_blank">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/vannesson/" className="hover:underline" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://github.com/bv86" className="hover:underline" target="_blank">
            Github
          </Link>
        </div>
        {/* Copyright Section */}
        <div className="text-sm">

          &copy; {new Date().getFullYear()} {getTranslation(locale, "footer.all_rights_reserved")}

        </div>
      </div>
    </footer>
  );
};
export default Footer;