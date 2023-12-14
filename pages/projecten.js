import Head from "next/head";
import Diensten from "../components/home/Diensten";
import Hero from "../components/home/Hero";
import IconBox from "../components/home/IconBox";
import Keukenwrappen from "../components/home/Keukenwrappen";
import Layout from "../components/Layout";
import Instagram from "../components/portfolio/Instagram";
import Testimonial from "../components/home/Testimonial";
import Sidebar from "../components/Sidebar";
import data from "../projecten.json";
import Breadcrump from "../components/Breadcrump";

export default function PortfolioPage({ insta }) {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Bekijk onze gerealiseerde projecten en laat je inspireren! Benieuwd hoe je jouw keuken een nieuwe uitstraling kunnen geven? Neem contact op!"
        />
        <title>Gerealiseerde projecten | Wrapjekeuken.nl</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump/>
      <div className="">
        <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto mt-6">
          <div class="container col-span-3 pt-6 mx-auto">
            <h1 className="text-2xl font-bold lg:ml-12 ml-6">PROJECTEN</h1>
            <div className="w-20 h-05 wrap-bg mt-5 mx-4 lg:ml-12 ml-6" />
            <div className="lg:pl-12 md:pl-6">
              <Instagram />
            </div>
          </div>
          <div className="col-span-1 relative pr-6 mb-12 xl:mb-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  let insta = [];
  // var url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=${process.env.INSTAGRAM}`;
  // await fetch(url).then(function (response) {
  //   data = response.data;
  // });

  return {
    props: {
      insta,
    },
    revalidate: 10,
  };
}
