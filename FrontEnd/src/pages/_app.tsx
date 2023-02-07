import NavbarLayout from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextUIProvider>
      <NavbarLayout >
        <Component {...pageProps} />
      </NavbarLayout>
    </NextUIProvider>
  )
}
