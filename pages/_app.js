import '@/styles/globals.css';
import TipContextProvider from '@/store/tipcontext-provider';

export default function App({ Component, pageProps }) {
  return (
    <TipContextProvider>
      <Component {...pageProps} />
    </TipContextProvider>
  );
}
