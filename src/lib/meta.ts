import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import type { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

type CommonMetaData = {
  description: string;
  image?: string;
  title: string | TemplateString;
};

export function commonMetaData({
  description,
  title,
}: CommonMetaData): Metadata {
  return {
    title,
    description,
    icons: [
      {
        rel: "icon",
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='10 0 100 100'><text y='.90em' font-size='90'>🧪</text></svg>",
        type: "image/svg+xml",
      },
    ],
    authors: [{ name: "@pyyupsk" }],
    metadataBase: new URL("https://regex.pyyupsk.vercel.app"),
    openGraph: {
      description,
      title,
      url: "https://regex.pyyupsk.vercel.app",
      siteName: "regex.pyyupsk.vercel.app",
      type: "website",
    },
    robots: {
      follow: true,
      googleBot: {
        follow: false,
        index: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        noimageindex: true,
      },
      index: false,
      nocache: true,
    },
  };
}
