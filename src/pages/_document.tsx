import AppNavbar from "@/components/AppNavbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Main /> */}
        <AppNavbar />
        <NextScript />
      </body>
    </Html>
  );
}
