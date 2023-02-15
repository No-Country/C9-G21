import NavbarLayout from "@/components/Navbar/Navbar";
import { GlobalProvider } from "@/context/global.context";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <NavbarLayout>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NavbarLayout>
    </GlobalProvider>
  );
}

export default MyApp;
