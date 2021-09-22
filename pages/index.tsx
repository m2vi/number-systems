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
        <Favicon />
      </Head>
      <Wrapper>
        <Inner>
          {systems.map((key) => {
            return (
              <Wrapput key={key}>
                <Digiput className='text-primary-300' title='Digits'>
                  {Systems[key]}
                </Digiput>
                <Mainput title={'Numeral System'} placeholder={capitalize(key)} aria-label={key} onChange={handleChange} value={to(key)} />
                <Buttput title='Copy to Clipboard' onClick={() => copy(to(key))}>
                  <IoCopyOutline className='text-accent hover:text-accent-hover w-4 h-4' />
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
