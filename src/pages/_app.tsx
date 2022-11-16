import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/raleway"; // Defaults to weight 400.
import "@fontsource/poppins"; // Defaults to weight 400.

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
