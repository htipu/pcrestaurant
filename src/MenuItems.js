import Burger from "./images/burger.jpeg";
import ChickenSand from "./images/chickensand.jpeg";
import BLT from "./images/blt.jpg";
import Veggie from "./images/veggie.jpeg";
import Spicy from "./images/spicy.jpeg";
import Fries from "./images/fries.jpeg";
import Mozz from "./images/mozzarella.jpeg";
import LoadedFries from "./images/loaded.jpeg";
import Salad from "./images/salad.jpeg";
import Lemonade from "./images/lemonade.jpeg";
import Shake from "./images/shake.jpeg";
import IcedTea from "./images/icedtea.jpeg";
import Sundae from "./images/sundae.jpeg";
import Cake from "./images/chococake.jpeg";
import Pie from "./images/pie.jpeg";

const menuItems = [
    {
      name: "Secret Beast Burger",
      category: "Main Dishes",
      description: "Our Secret Beast Burger, featuring our Secret Beast Sauce, consists of fresh tomatoes, pasture-fed beef, crisp lettuce, American cheese, and tangy onions. Comes with a side of Beast Fries.",
      image: Burger,
      price: "$12.99"
    },
    {
      name: "Beastly Chicken Sandwich",
      category: "Main Dishes",
      description: "Fried chicken enclosed within two perfectly toasted brioche buns. Accompanied with our Secret Beast sauce and only the freshest of the ingredients.",
      image: ChickenSand,
      price: "$14.49"
    },
    {
      name: "Beast BLT",
      category: "Main Dishes",
      description: "Delicious BLT .",
      image: BLT,
      price: "$12.49"
    },
    {
      name: "Beast Supreme Veggie Burger",
      category: "Main Dishes",
      description: "A plant-based veggie patty loaded with lettuce, tomato, pickles, and topped with creamy avocado and Secret Beast sauce.",
      image: Veggie,
      price: "$11.99"
    },
    {
      name: "Spicy Beast Burger",
      category: "Main Dishes",
      description: "Get ready for the heat! A fiery burger with jalapeños, spicy pepper jack cheese, and our special hot sauce.",
      image: Spicy,
      price: "$13.99"
    },
  
    {
      name: "Beast Fries",
      category: "Sides",
      description: "Crispy, golden fries tossed with our signature Beast seasoning. Perfect with any burger.",
      image: Fries,
      price: "$3.99"
    },
    {
      name: "Beastly Mozzarella Sticks",
      category: "Sides",
      description: "Crispy onion rings with a perfect golden crunch, served with a spicy dipping sauce.",
      image: Mozz,
      price: "$4.49"
    },
    {
      name: "Loaded Beast Fries",
      category: "Sides",
      description: "Fries loaded with melted cheese, crispy bacon, jalapeños, and drizzled with Beast sauce.",
      image: LoadedFries,
      price: "$5.99"
    },
    {
      name: "Secret Beast Salad",
      category: "Sides",
      description: "A fresh salad with mixed greens, tomatoes, cucumbers, and topped with Beast's own ranch dressing.",
      image: Salad,
      price: "$4.99"
    },
  
    {
      name: "Beast Shake",
      category: "Drinks",
      description: "A thick and creamy milkshake, available in chocolate, vanilla, or strawberry. Topped with whipped cream.",
      image: Shake,
      price: "$4.99"
    },
    {
      name: "Beastly Lemonade",
      category: "Drinks",
      description: "Freshly squeezed lemonade, tangy and sweet, perfect for cooling off after a spicy Beast burger.",
      image: Lemonade,
      price: "$2.79"
    },
    {
      name: "Iced Beast Tea",
      category: "Drinks",
      description: "A refreshing iced tea, served cold with a slice of lemon and sweetened to your liking.",
      image: IcedTea, // Placeholder image
      price: "$2.29"
    },
      {
      name: "Secret Beast Sundae",
      category: "Desserts",
      description: "A decadent sundae with vanilla ice cream, chocolate syrup, whipped cream, and sprinkles.",
      image: Sundae, // Placeholder image for Sundae
      price: "$4.99"
    },
    {
      name: "Beast Cake",
      category: "Desserts",
      description: "Rich, chocolate cake with layers of creamy frosting, topped with Beast sauce and sprinkles.",
      image: Cake, // Placeholder image for Cake
      price: "$5.99"
    },
    {
      name: "Beastly Pie",
      category: "Desserts",
      description: "A warm apple pie with a buttery crust, served with vanilla ice cream.",
      image: Pie, // Placeholder image for Pie
      price: "$3.99"
    }
  ];
  export default menuItems;