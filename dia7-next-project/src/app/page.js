// pages/_app.js
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import '../../src/app/globals.css';

function MyApp({ }) {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default MyApp;
