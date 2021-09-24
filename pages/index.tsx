import Head from 'next/head';
import { Inner, Wrapper } from '../components/styles';
import Favicon from '../components/Favicon';
import Main from '../components/Main';
import { NextSeo } from 'next-seo';

const Home = () => {
  const systems = ['binary', 'octal', 'decimal', 'hexadecimal'];

  return (
    <>
      <Head>
        <NextSeo defaultTitle='Number System' nofollow={true} noindex={true} />
        <Favicon />
      </Head>
      <Wrapper>
        <Inner>
          <Main systems={systems} />
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
