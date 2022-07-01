import '../src/styles/globals.css';
import type { AppProps } from "next/app";
import { configure } from "mobx";

function MyApp({ Component, pageProps }: AppProps) {
  configure({
    enforceActions: "never",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
