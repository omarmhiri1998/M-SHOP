import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import CookieCollections from '../components/home/CookieCollections';
import FourneeDuJour from '../components/home/FourneeDuJour';
import NotreHistoire from '../components/home/NotreHistoire';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CookieCollections />
      <FourneeDuJour />
      <NotreHistoire />
      <Footer />
    </>
  );
}

export default Home;