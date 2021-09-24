import { Inner, WrapperAll } from '../components/styles';
import Main from '../components/Main';

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
    <WrapperAll>
      <Inner>
        <Main systems={systems} />
      </Inner>
    </WrapperAll>
  );
};

export default All;
