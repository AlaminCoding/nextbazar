import "../styles/globals.scss";

import Layout from "../components/layout";
import Navbar from "components/ui/Navbar";
import SidePanel from "components/ui/SidePanel";
import CartSection from "components/block/CartSection";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "utils/store";
import FavSection from "components/block/FavSection";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <CartSection />
        <FavSection />
        <SidePanel cart={true} />
        <SidePanel cart={false} />
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
