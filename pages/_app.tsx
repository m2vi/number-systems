import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

export default MyApp;
