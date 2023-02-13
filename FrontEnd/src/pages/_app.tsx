import NavbarLayout from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarLayout>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NavbarLayout>
  );
}

export default MyApp;
