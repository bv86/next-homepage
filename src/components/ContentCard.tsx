import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { StrapiImage } from "./ui/StrapiImage";
import { ImageProps } from "@/lib/types";

export interface ContentCardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  createdAt: string;
  basePath: string;
}

export function ContentCard({
  title,
  description,
  slug,
  image,
  basePath,
}: Readonly<ContentCardProps>) {
  return (
    <Link href={`/${basePath}/${slug}`} className="">
      <Card className="flex flex-row">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          width={400}
          height={400}
        />
        <CardContent>
          <div className="content-items__card-text">
            <h5>{title}</h5>
            <p>{description.slice(0, 144)}...</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
