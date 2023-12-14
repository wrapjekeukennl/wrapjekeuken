import Head from "next/head";
import Diensten from "../components/home/Diensten";
import Hero from "../components/home/Hero";
import IconBox from "../components/home/IconBox";
import Keukenwrappen from "../components/home/Keukenwrappen";
import Layout from "../components/Layout";
import Projecten from "../components/home/Projecten";
import Testimonial from "../components/home/Testimonial";
import axios from "redaxios";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="">
        <Head>
          <meta
            name="description"
            content="Je keuken laten wrappen? Wij geven je keuken een nieuwe uitstraling! ✓ 6 jaar garantie ✓ Kras- & stootbestendig ✓ Vakkundig & professioneel ✓ Neem contact op!"
          />
          <meta
            property="og:title"
            content="Keuken wrappen? | Binnen 1 dag klaar! | Wrapjekeuken.nl"
          />
          <meta name="facebook-domain-verification" content="qcpibc2zzjll180ojjr26d6skiw9n4" />
          <title>
            Keuken wrappen? | Binnen 1 dag klaar! | Wrapjekeuken.nl
          </title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="heroheight">
          <Hero />
        </div>
        <div className="container w-5/6 sm:w-1/2 mx-auto mt-10 text-center dark:text-white">
          <p>
            Je keuken is de centrale plek in je huis; daar kom je samen om te
            eten en plezier te maken. Je wil je er dus goed voelen – en dat
            geldt voor iedereen, met elk budget.
          </p>
        </div>
        <IconBox />
        <Keukenwrappen />
        <Diensten />
        <Projecten data={data} />
        <Testimonial />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  let data = [];

  await axios.get('https://graph.instagram.com/refresh_access_token', {
    params: {
      'grant_type': 'ig_refresh_token',
      'access_token': 'IGQVJWa3Bjejdvc3dDSF9yckJtNEVNVFo2OTZAuQXZATNkFHaFBaUzVOcllhdDdvblQ3U0x6Qmg2UXIzeFY4Y055V2JNUG5XZA0xuYnJQSHZA6VnluaDZAiRnhnZA0FlZAXhGR0NvaTdXSnhQZA2s0Q19FTDB6UgZDZD'
    }
  }).then(res => {
    console.log('check')
  })

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
