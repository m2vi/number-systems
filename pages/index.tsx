import Head from 'next/head';
import { Buttput, Digiput, Inner, Mainput, Wrapper, Wrapput } from '../components/styles';
import { ChangeEvent, useState } from 'react';
import { Systems, num, systems } from '../utils/num';
import Favicon from '../components/Favicon';
import { capitalize, copy } from '../utils/text';
import { IoCopyOutline } from 'react-icons/io5';

const Home = () => {
  const [bin, setBin] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const binary = num(e.target.value).from(Systems[e.target.ariaLabel]).to(Systems.binary);

    setBin(binary);
  };

  const to = (type: string) => num(bin).from(Systems.binary).to(Systems[type]);

  return (
    <>
      <Head>
        <title>Number Systems</title>
        <meta name='title' content='Number Systems' />
        <meta name='description' content='A page that converts numbers into different number systems. ' />
        <meta name='keywords' content='numeral systems, number systems, hex, binary, octal, decimal' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='m2vi' />
        <Favicon />
      </Head>
      <Wrapper>
        <Inner>
          {systems.map((key) => {
            return (
              <Wrapput key={key}>
                <Digiput title='Digits'>{Systems[key]}</Digiput>
                <Mainput title={'Numeral System'} placeholder={capitalize(key)} aria-label={key} onChange={handleChange} value={to(key)} />
                <Buttput title='Copy to Clipboard' onClick={() => copy(to(key))}>
                  <IoCopyOutline />
                </Buttput>
              </Wrapput>
            );
          })}
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
