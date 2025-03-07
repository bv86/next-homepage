import { type Locale } from "@/i18n.config";
import { getTranslation } from "@/i18n.utils";
import Link from "next/link";

const Footer = async ({ locale }: {locale: Locale}) => {

    return (
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end">
            {/* Social Media Section */}
            <div className="mb-2 md:mb-0 self-start">
              <h2 className="text-lg font-semibold mb-2">{await getTranslation(locale, "footer.follow_me")}</h2>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/sachaka86/" className="hover:text-gray-400" target="_blank">
                  Instagram
                </Link>
                <Link href="https://www.linkedin.com/in/vannesson/" className="hover:text-gray-400" target="_blank">
                  LinkedIn
                </Link>
              </div>
            </div>
            {/* Copyright Section */}
            <div className="text-sm md:text-base">
              
                &copy; {new Date().getFullYear()} {getTranslation(locale, "footer.all_rights_reserved")}
              
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;