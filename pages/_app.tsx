import UserProvider from '../context/UserProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
