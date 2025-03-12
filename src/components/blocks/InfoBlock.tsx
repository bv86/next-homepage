import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { StrapiImage } from "../ui/StrapiImage";
import { InfoBlockProps } from "@/lib/types";
import { Button } from "../ui/button";


export function InfoBlock({
  reversed,
  image,
  title,
  content,
  cta,
}: Readonly<InfoBlockProps>) {
  return (
    <section className={`flex gap-4 w-full ${reversed ? "flex-row-reverse" : "flex-row"}`}>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={500}
        width={600}
        className=""
      />
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
        <ReactMarkdown>{content}</ReactMarkdown>
        {cta && (

          <Button className="">
            <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
              {cta.text}
            </Link>
          </Button>
        )}
      </div>
    </section >
  );
}