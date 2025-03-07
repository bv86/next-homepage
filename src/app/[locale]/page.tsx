import { getTranslation } from "@/i18n.utils";
import { LocalizedPage } from "@/lib/types";


const Home : LocalizedPage = async ({params}) => {
  const { locale } = await params;
  return (
      <div className="flex flex-col items-center justify-center text-5xl flex-grow">
        <div>{getTranslation(locale, "home.title")}</div>
      </div>
  );
}

export default Home;