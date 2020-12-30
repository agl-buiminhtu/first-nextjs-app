import Header from '../components/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Header />
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </>
   );
}

export default MyApp;
