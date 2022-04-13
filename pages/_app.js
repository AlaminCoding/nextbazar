import "../styles/globals.scss";
import MainLayout from "components/MainLayout";
import CommonLayout from "../components/commonLayout";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "utils/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        )}
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
