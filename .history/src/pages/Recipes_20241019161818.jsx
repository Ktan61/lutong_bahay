import Header from '../components/Header/index.jsx'

const CATEGORY = [
    {
      name: "Main Dishes",
      image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/pork-sinigang-pot.jpg",
    },
    {
      name: "Snacks",
      image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/puto-w-cheese.jpg",
    },
    {
      name: "Soups & Stews",
      image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/kare-kare-vertical.jpg",
    },
    {
      name: "Desserts & Drinks",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/%D0%92%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%96%D0%B9_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD_Samsung_Galaxy_Fold_2.png",
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
