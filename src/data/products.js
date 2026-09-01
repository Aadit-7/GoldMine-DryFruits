import almondImage from "../assets/Prduct-Details_images/almond/almondImage.avif";
import almondImage2 from "../assets/Prduct-Details_images/almond/almondImage2.avif";
import almondImage3 from "../assets/Prduct-Details_images/almond/almondImage3.avif";
import almondImage4 from "../assets/Prduct-Details_images/almond/almondImage4.avif";

import cashewImage from "../assets/Prduct-Details_images/cashews/cashews.avif";
import cashewImage2 from "../assets/Prduct-Details_images/cashews/cashews2.avif";
import cashewImage3 from "../assets/Prduct-Details_images/cashews/cashews3.avif";
import cashewImage4 from "../assets/Prduct-Details_images/cashews/cashews4.avif";

import walnutImage from "../assets/Prduct-Details_images/wallnuts/wallnut.avif";
import walnutImage2 from "../assets/Prduct-Details_images/wallnuts/wallnut2.avif";
import walnutImage3 from "../assets/Prduct-Details_images/wallnuts/wallnut3.avif";

import pistachioImage from "../assets/Prduct-Details_images/pistachios/pistachios.avif";
import pistachioImage2 from "../assets/Prduct-Details_images/pistachios/pistachios2.avif";
import pistachioImage3 from "../assets/Prduct-Details_images/pistachios/pistachios3.avif";
import pistachioImage4 from "../assets/Prduct-Details_images/pistachios/pistachios4.avif";

import mixedNutsImage from "../assets/Prduct-Details_images/Mixed Nuts/MixedNuts.avif";
import mixedNutsImage2 from "../assets/Prduct-Details_images/Mixed Nuts/MixedNuts2.avif";
import mixedNutsImage3 from "../assets/Prduct-Details_images/Mixed Nuts/MixedNuts3.avif";
import mixedNutsImage4 from "../assets/Prduct-Details_images/Mixed Nuts/MixedNuts4.avif";

import blueberryImage from "../assets/Prduct-Details_images/blueberries/blueberryImage2.avif";
import blueberryImage2 from "../assets/Prduct-Details_images/blueberries/blueberryImage2.avif";
import blueberryImage3 from "../assets/Prduct-Details_images/blueberries/blueberryImage3.avif";
import blueberryImage4 from "../assets/Prduct-Details_images/blueberries/blueberryImage4.avif";

import cranberryImage from "../assets/Prduct-Details_images/cranberries/cranberries.avif";
import cranberryImage2 from "../assets/Prduct-Details_images/cranberries/cranberries2.avif";
import cranberryImage3 from "../assets/Prduct-Details_images/cranberries/cranberries3.avif";
import cranberryImage4 from "../assets/Prduct-Details_images/cranberries/cranberries4.avif";

import datesImage from "../assets/Prduct-Details_images/dates/dates.avif";
import datesImage2 from "../assets/Prduct-Details_images/dates/dates2.avif";
import datesImage3 from "../assets/Prduct-Details_images/dates/dates3.avif";
import datesImage4 from "../assets/Prduct-Details_images/dates/dates4.avif";

import giftBoxImage from "../assets/Prduct-Details_images/Gift Box/Gift Boc.avif";

export const products = [
  {
    id: 1,
    name: "Premium Californian Almonds",
    category: "nuts",
    description:
      "Experience the crunch of our premium hand-picked Californian almonds. Carefully roasted to preserve their natural goodness and rich flavor.",

    features: [
      "Zero Cholesterol & Trans Fat",
      "High in Dietary Fiber",
      "Rich source of Antioxidants",
      "Contains Vitamin E",
    ],

    ingredients: "100% Premium Californian Almonds",

    nutrition: {
      Energy: "579 kcal",
      Protein: "21.15g",
      Carbohydrates: "21.55g",
      Fiber: "12.50g",
      TotalFat: "49.93g",
    },

    price: 299,
    originalPrice: 399,
    discount: "25% OFF",
    rating: 4.5,
    reviews: 1284,

    image: almondImage,

    images: [almondImage, almondImage2, almondImage3, almondImage4],

    weights: ["100g", "200g", "500g", "1kg"],
  },

  {
    id: 2,
    name: "Whole Natural Cashews",
    category: "nuts",
    description:
      "Enjoy the rich, buttery taste of premium W320 grade whole cashews. Carefully selected for their natural flavor, crunch, and quality.",

    features: [
      "Naturally Cholesterol Free",
      "Rich in Healthy Fats",
      "Good Source of Protein",
      "Contains Essential Minerals",
    ],

    ingredients: "100% Premium Whole Cashews",

    nutrition: {
      Energy: "553 kcal",
      Protein: "18.22g",
      Carbohydrates: "30.19g",
      Fiber: "3.30g",
      TotalFat: "43.85g",
    },

    price: 549,
    originalPrice: 649,
    discount: "15% OFF",
    rating: 4.6,
    reviews: 986,

    image: cashewImage,

    images: [cashewImage, cashewImage2, cashewImage3, cashewImage4],

    weights: ["100g", "250g", "500g", "1kg"],
  },

  {
    id: 3,
    name: "Chilean Walnut Kernels",
    category: "nuts",
    description:
      "Premium extra-light Chilean walnut kernels with a rich flavor and satisfying crunch. Perfect for healthy snacking and everyday recipes.",

    features: [
      "Rich Source of Omega-3",
      "Good for Heart Health",
      "High in Antioxidants",
      "Natural Source of Protein",
    ],

    ingredients: "100% Premium Chilean Walnut Kernels",

    nutrition: {
      Energy: "654 kcal",
      Protein: "15.23g",
      Carbohydrates: "13.71g",
      Fiber: "6.70g",
      TotalFat: "65.21g",
    },

    price: 385,
    originalPrice: 450,
    discount: "15% OFF",
    rating: 4.4,
    reviews: 742,

    image: walnutImage,

    images: [walnutImage, walnutImage2, walnutImage3],

    weights: ["100g", "200g", "500g", "1kg"],
  },

  {
    id: 4,
    name: "Roasted Salted Pistachios",
    category: "nuts",
    description:
      "Crunchy premium pistachios roasted to perfection and lightly salted for a delicious and satisfying snacking experience.",

    features: [
      "Rich in Protein",
      "Good Source of Healthy Fats",
      "Contains Dietary Fiber",
      "Naturally Rich in Antioxidants",
    ],

    ingredients: "Pistachios, Salt",

    nutrition: {
      Energy: "562 kcal",
      Protein: "20.16g",
      Carbohydrates: "27.17g",
      Fiber: "10.30g",
      TotalFat: "45.39g",
    },

    price: 425,
    originalPrice: 500,
    discount: "15% OFF",
    rating: 4.5,
    reviews: 865,

    image: pistachioImage,

    images: [pistachioImage, pistachioImage2, pistachioImage3, pistachioImage4],

    weights: ["100g", "250g", "500g", "1kg"],
  },

  {
    id: 5,
    name: "Premium Mixed Nuts",
    category: "nuts",
    description:
      "A delicious premium combination of carefully selected almonds, cashews, walnuts, and other nutritious nuts.",

    features: [
      "Premium Assorted Nuts",
      "Rich in Protein",
      "Good Source of Healthy Fats",
      "Perfect for Everyday Snacking",
    ],

    ingredients: "Almonds, Cashews, Walnuts, Pistachios and Other Premium Nuts",

    nutrition: {
      Energy: "590 kcal",
      Protein: "18.50g",
      Carbohydrates: "22.00g",
      Fiber: "8.50g",
      TotalFat: "50.00g",
    },

    price: 699,
    originalPrice: 799,
    discount: "13% OFF",
    rating: 4.7,
    reviews: 1532,

    image: mixedNutsImage,

    images: [mixedNutsImage, mixedNutsImage2, mixedNutsImage3, mixedNutsImage4],

    weights: ["200g", "400g", "500g", "1kg"],
  },

  {
    id: 6,
    name: "Organic Blueberries",
    category: "berries",
    description:
      "Naturally sweet and delicious dried organic blueberries packed with flavor and essential nutrients.",

    features: [
      "Rich in Antioxidants",
      "Good Source of Dietary Fiber",
      "Naturally Sweet",
      "Premium Organic Quality",
    ],

    ingredients: "100% Dried Organic Blueberries",

    nutrition: {
      Energy: "317 kcal",
      Protein: "2.50g",
      Carbohydrates: "80.00g",
      Fiber: "7.00g",
      TotalFat: "1.50g",
    },

    price: 399,
    originalPrice: 450,
    discount: "11% OFF",
    rating: 4.4,
    reviews: 624,

    image: blueberryImage,

    images: [blueberryImage, blueberryImage2, blueberryImage3, blueberryImage4],

    weights: ["100g", "200g", "500g"],
  },

  {
    id: 7,
    name: "Premium Cranberries",
    category: "berries",
    description:
      "Delicious premium dried cranberries with a sweet and tangy flavor, perfect for snacking and adding to your favorite recipes.",

    features: [
      "Sweet and Tangy Flavor",
      "Rich in Antioxidants",
      "Good Source of Fiber",
      "Perfect for Healthy Snacking",
    ],

    ingredients: "Dried Cranberries, Sugar, Sunflower Oil",

    nutrition: {
      Energy: "325 kcal",
      Protein: "0.50g",
      Carbohydrates: "83.00g",
      Fiber: "5.00g",
      TotalFat: "1.20g",
    },

    price: 349,
    originalPrice: 399,
    discount: "13% OFF",
    rating: 4.3,
    reviews: 518,

    image: cranberryImage,

    images: [cranberryImage, cranberryImage2, cranberryImage3, cranberryImage4],

    weights: ["100g", "250g", "500g"],
  },

  {
    id: 8,
    name: "Premium Dates",
    category: "dates",
    description:
      "Naturally sweet and soft premium dates selected for their rich taste, freshness, and nutritional goodness.",

    features: [
      "Naturally Sweet",
      "Rich Source of Energy",
      "Contains Dietary Fiber",
      "No Artificial Preservatives",
    ],

    ingredients: "100% Premium Natural Dates",

    nutrition: {
      Energy: "282 kcal",
      Protein: "2.45g",
      Carbohydrates: "75.03g",
      Fiber: "8.00g",
      TotalFat: "0.39g",
    },

    price: 599,
    originalPrice: 699,
    discount: "14% OFF",
    rating: 4.6,
    reviews: 1042,

    image: datesImage,

    images: [datesImage, datesImage2, datesImage3, datesImage4],

    weights: ["250g", "500g", "1kg"],
  },

  {
    id: 9,
    name: "Premium Gift Box",
    category: "gifts",
    description:
      "A beautifully curated premium gift box filled with delicious dry fruits and nutritious snacks, perfect for every special occasion.",

    features: [
      "Premium Assorted Selection",
      "Perfect for Gifting",
      "Beautifully Packaged",
      "Suitable for Special Occasions",
    ],

    ingredients:
      "Assorted Premium Dry Fruits, Nuts, Berries and Healthy Snacks",

    nutrition: {
      Energy: "550 kcal",
      Protein: "16.00g",
      Carbohydrates: "40.00g",
      Fiber: "7.00g",
      TotalFat: "38.00g",
    },

    price: 999,
    originalPrice: 1299,
    discount: "20% OFF",
    rating: 4.8,
    reviews: 756,

    image: giftBoxImage,

    images: [giftBoxImage],

    weights: ["500g", "1kg", "Premium Gift Pack"],
  },
];
