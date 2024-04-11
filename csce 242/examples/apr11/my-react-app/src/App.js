import './App.css';
import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';

const App = () => {
  return (
	<div>
		<Header />

		<Animal name="Panda" className="panda" image="images/panda.webp" />

		<Animal name="Tiger" className="tiger"image="images/tiger.jpg" />

		<Footer />
	</div>
    
    // <section className="fruits">
    //   <ul>
    //     <li>Apples</li>
    //     <li>Bananas</li>
    //   </ul>
    // </section>
  );
};

export default App;
