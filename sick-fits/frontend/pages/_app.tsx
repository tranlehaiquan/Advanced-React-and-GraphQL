import Page from "../components/Page";
import "nprogress/nprogress.css";
import Ngr from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => Ngr.start());
Router.events.on("routeChangeComplete", () => Ngr.done());
Router.events.on("routeChangeError", () => Ngr.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
