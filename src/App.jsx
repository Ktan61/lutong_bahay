import styles from './styles/Home.module.css';
import Header from './components/Header';
import HeroSection from './components/Hero/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes/FeaturedRecipes';
import ShareRecipeSection from './components/ShareRecipeSection/ShareRecipeSection';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedRecipes />
      {/* <div className={styles.blueBar}></div> */}
      <ShareRecipeSection />

      <a href={`/Testing`}>Link to Testing Page</a>
      <Footer />
    </>
  )
}

export default App
