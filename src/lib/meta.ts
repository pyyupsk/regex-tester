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
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    authors: [{ name: "@pyyupsk" }],
    metadataBase: new URL("https://pyyupsk.vercel.app"),
    openGraph: {
      description,
      title,
      url: "https://pyyupsk.vercel.app",
      siteName: "pyyupsk.vercel.app",
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
