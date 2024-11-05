import './App.css';
import Cards from './components/Cards';
import CardSecond from './components/CardSecond';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbaar from './components/Navbaar';
import Signup from './components/Signup';

function App(props) {
  const cards=[
    {
    css:"md:flex-row",
    img:"images/ai.jpg",
    heading:"One Interface to create  Thousands of AI agents",
    para:"Imagine waking up in morning and AI has already followed with all vendors and proposing you with a simple Yes/No descion that you can resolve with a click"
   },
   {
    css:"md:flex-row-reverse",
    img:"images/ai.jpg",
    heading:"Global Marketplace",
    para:"Our AI marketplace brings massive growth opportunities to table. It automatically tracks inventory and finds a best deal for you or shares where you can sell your product globally. AI manages cross border formalities, payments, language barriers etc and saves thousands of hours of yours with massive business oppurtunities globally."
   }
  ]
  return (
    <>
      <Navbaar/>
      <HeroSection/>
      <Cards data={cards}/>
      <CardSecond/>
      <Signup/>
      <Footer/>
    </>
  );
}

export default App;
