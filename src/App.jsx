import Header from './components/Header';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}

export default App;