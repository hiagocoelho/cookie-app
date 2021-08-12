import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cookie - Início</title>
        <meta name="description" content="Cookie - Início" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
