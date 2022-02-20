import "../styles/globals.scss";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../components/layout";
import Navbar from "components/ui/Navbar";
import SidePanel from "components/ui/SidePanel";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <SidePanel cart={true} />
        <SidePanel cart={false} />
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default MyApp;
