import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      offset: 80,
      once: false,
    });
  }, []);

  
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <title>Welcome To Avivas Asset</title>
        <link rel="icon" type="image/x-icon" href="/Avivasasset-Fevicon.jpeg" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="keywords" content="Client consultant" />
      </Head>

      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
    
  );
}

export default MyApp;


