"use client";

import "./globals.css";
import Head from "next/head";
import Header from "@/components/header";
import ProductDetails from "@/components/product_details";
import Footer from "@/components/footer";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProductHunt</title>
        <meta
          name="description"
          content="ProductHunt Redesign using Next.js and Mantine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <main>
        <Container> */}
      <ProductDetails />
      {/* </Container>
      </main> */}

      {/* <Footer /> */}
    </div>
  );
}
