import Head from 'next/head';
import { Inner, Wrapper } from '../components/styles';
import Favicon from '../components/Favicon';
import Main from '../components/Main';
import { NextSeo } from 'next-seo';

const All = () => {
  const systems = [
    'binary',
    'ternary',
    'quaternary',
    'quinary',
    'senary',
    'septenary',
    'octal',
    'nonary',
    'decimal',
    'undecimal',
    'duodecimal',
    'tridecimal',
    'tetradecimal',
    'pentadecimal',
    'hexadecimal',
    'heptadecimal',
    'octodecimal',
    'enneadecimal',
    'vigesimal',
    'unvigesimal',
    'duovigesimal',
    'trivigesimal',
    'tetravigesimal',
    'pentavigesimal',
    'hexavigesimal',
    'heptavigesimal',
    'octovigesimal',
    'enneavigesimal',
    'trigesimal',
    'untrigesimal',
    'duotrigesimal',
    'tritrigesimal',
    'tetratrigesimal',
    'pentatrigesimal',
    'hexatrigesimal',
  ];

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

export default All;
