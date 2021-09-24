import { Buttput, Digiput, Mainput, Wrapput } from '../components/styles';
import { ChangeEvent, useState } from 'react';
import { Systems, num } from '../utils/num';
import { capitalize, copy } from '../utils/text';
import { IoCopyOutline } from 'react-icons/io5';

const Main = ({ systems }: { systems: string[] }) => {
  const [bin, setBin] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const binary = num(e.target.value).from(Systems[e.target.ariaLabel]).to(Systems.binary);

    setBin(binary);
  };

  const to = (type: string) => num(bin).from(Systems.binary).to(Systems[type]);

  return (
    <>
      {systems.map((key) => {
        return (
          <Wrapput key={key}>
            <Digiput title='Base'>{Systems[key]}</Digiput>
            <Mainput title='Number System' placeholder={capitalize(key)} aria-label={key} onChange={handleChange} value={to(key)} />
            <Buttput title='Copy' onClick={() => copy(to(key))}>
              <IoCopyOutline />
            </Buttput>
          </Wrapput>
        );
      })}
    </>
  );
};

export default Main;
