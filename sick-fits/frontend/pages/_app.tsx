import Page from "../components/Page";
import "nprogress/nprogress.css";
import Ngr from "nprogress";
import Router from "next/router";
import { useApollo } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => Ngr.start());
Router.events.on("routeChangeComplete", () => Ngr.done());
Router.events.on("routeChangeError", () => Ngr.done());

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

export default MyApp;
