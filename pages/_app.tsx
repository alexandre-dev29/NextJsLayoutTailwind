import Head from "next/head";
import { AppProps } from "next/app";
import { IconoirProvider } from "iconoir-react";
import { Layout } from "../components";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <Head>
        <title>Simple Layout</title>
        <meta name="description" content={`simple layout`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Axel Mwenze" />
      </Head>

      <IconoirProvider
        iconProps={{
          color: "#2d2d2d",
          strokeWidth: 1,
          fontSize: 22,
          width: "1em",
          height: "1em",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IconoirProvider>
    </div>
  );
}

export default MyApp;
