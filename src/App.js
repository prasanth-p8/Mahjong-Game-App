import "./App.css";
import WeclomePage from "./components/WelcomePage";

function App() {
  // cards details with an array of object in gameCards variable.
  const gameCards = [
    {
      id: 0,
      isOpened: false,
      imgName: "Heart Rings",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612412/wedding-ring-in-heart-vector-1345981_xwwbit.jpg",
    },
    {
      id: 4,
      isOpened: false,
      imgName: "Joystick",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/hand-holding-gaming-controller-joystick-free-vector_ehwxib.jpg",
    },
    {
      id: 1,
      isOpened: false,
      imgName: "World Tour",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/world-travel-free-vector_oyltq4.jpg",
    },
    {
      id: 2,
      isOpened: false,
      imgName: "Laptop",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/istockphoto-1485075537-612x612_ysljnn.jpg",
    },
    {
      id: 6,
      isOpened: false,
      imgName: "Crying Baby",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/Baby-begging-for-hug-vector-illustration-vector_tjp29j.jpg",
    },
    {
      id: 7,
      isOpened: false,
      imgName: "Apple",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/apple_ojngno.jpg",
    },

    {
      id: 9,
      isOpened: false,
      imgName: "Fortune Telling",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/131270372-fortune-teelling-and-divination-isolated-elements-of-coffee-cup-for-a-mystic-sphere-of-activity-shop_omqae6.jpg",
    },
    {
      id: 10,
      isOpened: false,
      imgName: "Coffee",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/coffee-cup-icon-free-vector_ganydf.jpg",
    },
    {
      id: 18,
      isOpened: false,
      imgName: "Crying Baby",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/Baby-begging-for-hug-vector-illustration-vector_tjp29j.jpg",
    },
    {
      id: 3,
      isOpened: false,
      imgName: "Juice with Chicken",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_ej4slh.jpg",
    },
    {
      id: 14,
      isOpened: false,
      imgName: "Laptop",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/istockphoto-1485075537-612x612_ysljnn.jpg",
    },
    {
      id: 11,
      isOpened: false,
      imgName: "Milkshake",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/depositphotos_575999210-stock-illustration-rose-juice-frappe-take-way_gxhwe7.webp",
    },
    {
      id: 5,
      isOpened: false,
      imgName: "Books",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_gchw77.png",
    },
    {
      id: 23,
      isOpened: false,
      imgName: "Milkshake",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/depositphotos_575999210-stock-illustration-rose-juice-frappe-take-way_gxhwe7.webp",
    },
    {
      id: 12,
      isOpened: false,
      imgName: "Heart Rings",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612412/wedding-ring-in-heart-vector-1345981_xwwbit.jpg",
    },
    {
      id: 13,
      isOpened: false,
      imgName: "World Tour",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/world-travel-free-vector_oyltq4.jpg",
    },

    {
      id: 15,
      isOpened: false,
      imgName: "Juice with Chicken",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_ej4slh.jpg",
    },
    {
      id: 16,
      isOpened: false,
      imgName: "Joystick",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/hand-holding-gaming-controller-joystick-free-vector_ehwxib.jpg",
    },
    {
      id: 17,
      isOpened: false,
      imgName: "Books",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_gchw77.png",
    },

    {
      id: 19,
      isOpened: false,
      imgName: "Apple",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/apple_ojngno.jpg",
    },
    {
      id: 20,
      isOpened: false,
      imgName: "Fast Food",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_1_mdbfoc.jpg",
    },
    {
      id: 21,
      isOpened: false,
      imgName: "Fortune Telling",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/131270372-fortune-teelling-and-divination-isolated-elements-of-coffee-cup-for-a-mystic-sphere-of-activity-shop_omqae6.jpg",
    },
    {
      id: 8,
      isOpened: false,
      imgName: "Fast Food",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612411/images_1_mdbfoc.jpg",
    },
    {
      id: 22,
      isOpened: false,
      imgName: "Coffee",
      imgUrl:
        "https://res.cloudinary.com/dlefoxknm/image/upload/v1718612410/coffee-cup-icon-free-vector_ganydf.jpg",
    },
  ];

  // card details array is shared to WelcomePage components through props data
  return <WeclomePage gameCards={gameCards} />;
}

export default App;
