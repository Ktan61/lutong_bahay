import './App.css';
import Header from './components/Header/index.jsx';
import HeroSection from './components/Hero/index.jsx';
import FeaturedRecipes from './components/FeaturedRecipes/index.jsx';
import ShareRecipeSection from './components/ShareRecipeSection/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {

  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <FeaturedRecipes />
      <ShareRecipeSection />
      <Footer/>
    </div>
  )
}

export default App
