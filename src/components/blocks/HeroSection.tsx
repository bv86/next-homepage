import { HeroSectionProps } from "@/lib/types";
import Link from "next/link";
import { StrapiImage } from "../ui/StrapiImage";
import { Button } from "../ui/button";

export function HeroSection({
    title,
    cta,
    image,
}: Readonly<HeroSectionProps>) {
    return (
        <section className="relative flex flex-col w-full items-center p-16 md:p-8 aspect-video">
            <StrapiImage
                src={image.url}
                alt={image.alternativeText || "No alternative text provided"}
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover object-center rounded-b-3xl"
                width={1920}
                height={1080}
            />
            <div className="flex-grow flex flex-row items-center md:self-start m-8">
                <h1 className="text-primary-foreground font-bold text-2xl md:text-6xl">{title}</h1>
            </div>
            {cta && (
                <Button>
                    <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
                        {cta.text}
                    </Link>
                </Button>
            )}
        </section>
    );
}