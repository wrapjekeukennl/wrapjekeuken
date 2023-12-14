import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import IconBox from "../components/keuken-wrappen/IconBox";
import Head from "next/head";
import Breadcrump from "../components/Breadcrump";

const blog = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Wrap je keuken in de media! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel"
        />
        <title>Wrapjekeuken.nl - Contactformulier verzonden</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump/>
      <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto lg:px-12 lg:pr-6 px-6">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold mt-12">CONTACTFORMULIER</h1>
          <div className="w-20 h-05 wrap-bg mt-5" />
          <p className="mt-5 text-sm">
            Bedankt voor je aanvraag. Wij nemen binnen 2 werkdagen contact met
            je op.
          </p>
        </div>
        <div className="col-span-1 relative pr-6 mb-12 xl:mb-0">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
};

export default blog;
