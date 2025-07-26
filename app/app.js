import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'; // keep your global styles

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

