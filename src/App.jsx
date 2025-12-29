import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />  {}
        <Plans />
      </main>
      <Contact />
    </div>
  );
}

export default App;