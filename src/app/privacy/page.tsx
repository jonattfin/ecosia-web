'use client';

import Head from "next/head";
import { useContext } from "react";
import { LanguageContext } from "@/providers/context";

import * as Components from "./components";

export default function Component() {
  const title =
    "Learn more about our privacy policy and the data that we do collect";
  const language = useContext(LanguageContext);
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Components.ProtectPrivacyComponent {...{ language }} />
    </section>
  );
}
