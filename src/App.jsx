import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { CategoryNav } from "./components/categoryNav";
import { SectionTitle } from "./components/sectionTitle";
import { Card } from "./components/card";
import { DynamicSection } from "./sections/dynamicSection";
import { Banner } from "./sections/banner";

function App() {
  return (
    <div>
      <div className="container">
        <Nav />
        <main>
          <Banner />
          <CategoryNav />
          <DynamicSection title="Лаваш" data={lavash} />
          <DynamicSection title="Бургеры" data={burger} />
          <DynamicSection title="Клаб-Сэндвич" data={sandwich} />
          <DynamicSection title="Шаурма" data={shaurma} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

const lavash = [
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "39 000",
    isAvailable: true,
    img: "/images/lavash1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "49 000",
    isAvailable: true,
    img: "/images/lavash2.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "29 000",
    isAvailable: false,
    img: "/images/pizza1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "19 000",
    isAvailable: true,
    img: "/images/lavash1.png",
  },
];

const burger = [
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "39 000",
    isAvailable: true,
    img: "/images/burger1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "49 000",
    isAvailable: true,
    img: "/images/burger2.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "29 000",
    isAvailable: false,
    img: "/images/burger1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "19 000",
    isAvailable: true,
    img: "/images/burger2.png",
  },
];

const sandwich = [
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "39 000",
    isAvailable: true,
    img: "/images/sandwich1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "49 000",
    isAvailable: true,
    img: "/images/sandwich1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "29 000",
    isAvailable: false,
    img: "/images/sandwich1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "19 000",
    isAvailable: true,
    img: "/images/sandwich1.png",
  },
];

const shaurma = [
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "39 000",
    isAvailable: true,
    img: "/images/shaurma1.png",
  },
  {
    title: "Комбо",
    subtitle: "Мясной лаваш, фри, кола разлив и кетчуп",
    price: "49 000",
    isAvailable: true,
    img: "/images/shaurma1.png",
  },
];
