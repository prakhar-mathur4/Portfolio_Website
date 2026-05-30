import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prakhar Mathur — Portfolio",
    short_name: "Prakhar Mathur",
    description: "Site Reliability Engineer & AIOps Specialist",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#f8fafc",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
