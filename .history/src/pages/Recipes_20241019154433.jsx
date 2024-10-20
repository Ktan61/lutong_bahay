import Header from '../components/Header/index.jsx'

const PRODUCTS = [
    {
      name: "Shoes",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
      price: 50,
    },
    {
      name: "Men's shirt",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg",
      price: 36,
    },
    {
      name: "Men's jeans",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 45,
    },
    {
      name: "Samsung galaxy",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/%D0%92%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%96%D0%B9_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD_Samsung_Galaxy_Fold_2.png",
      price: 1200,
    }
  ];

export default function Recipes() {
    return(
        <div>
            <Header />
            This is the RECIPES
        </div>
    )
}
