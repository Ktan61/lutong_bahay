import './App.css';
import Header from './components/Header';
import HeroSection from './components/Hero/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes/FeaturedRecipes';
import ShareRecipeSection from './components/ShareRecipeSection/ShareRecipeSection';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <FeaturedRecipes />
      <ShareRecipeSection />
      <a href={`/Testing`}>Link to Testing Page</a>
      <Footer/>
    </div>
  )
}

export default App
