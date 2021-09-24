import { Inner, Wrapper } from '../components/styles';
import Main from '../components/Main';

const Home = () => {
  const systems = ['binary', 'octal', 'decimal', 'hexadecimal'];

  return (
    <Wrapper>
      <Inner>
        <Main systems={systems} />
      </Inner>
    </Wrapper>
  );
};

export default Home;
