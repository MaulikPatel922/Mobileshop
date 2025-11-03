// ✅ Samsung Imports (1–10)
import s25ultra from "../src/assets/Image/samsung/s25ultra.jpg";
import s24fe from "../src/assets/Image/samsung/s24fe.jpg";
import a55 from "../src/assets/Image/samsung/a55.jpg";
import f17 from "../src/assets/Image/samsung/f17.jpg";
import a35 from "../src/assets/Image/samsung/a35.jpg";
import s24 from "../src/assets/Image/samsung/s24.jpg";
import a17 from "../src/assets/Image/samsung/a17.jpg";
import s25 from "../src/assets/Image/samsung/s25.jpg";
import a56 from "../src/assets/Image/samsung/a56.jpg";
import m34 from "../src/assets/Image/samsung/m34.jpg";

// ✅ Apple Imports (11–20)
import i17promax from "../src/assets/Image/apple/17promax.jpg";
import i17pro from "../src/assets/Image/apple/17pro.jpg";
import i17 from "../src/assets/Image/apple/17.jpg";
import i17air from "../src/assets/Image/apple/17air.jpg";
import i16promax from "../src/assets/Image/apple/16promax.jpg";
import i16pro from "../src/assets/Image/apple/16pro.jpg";
import i16plus from "../src/assets/Image/apple/16plus.jpg";
import i16 from "../src/assets/Image/apple/16.jpg";
import i15promax from "../src/assets/Image/apple/15promax.jpg";
import i15 from "../src/assets/Image/apple/15.jpg";

// ✅ OnePlus Imports (21–30)
import oneplus13 from "../src/assets/Image/oneplus/13.jpg";
import oneplus13s from "../src/assets/Image/oneplus/13s.jpg";
import oneplus12r from "../src/assets/Image/oneplus/12r.jpg";
import nordce5 from "../src/assets/Image/oneplus/nordce5.jpg";
import nord5 from "../src/assets/Image/oneplus/nord5.jpg";
import oneplus13r from "../src/assets/Image/oneplus/13r.jpg";
import nordce4lite from "../src/assets/Image/oneplus/nordce4lite.jpg";
import nordce4 from "../src/assets/Image/oneplus/nordce4.jpg";
import oneplus11 from "../src/assets/Image/oneplus/11.jpg";
import oneplus12 from "../src/assets/Image/oneplus/12.jpg";

// ✅ Vivo Imports (31–40)
import x200fe from "../src/assets/Image/vivo/x200fe.jpg";
import t4ultra from "../src/assets/Image/vivo/t4ultra.jpg";
import v50 from "../src/assets/Image/vivo/v50.jpg";
import y400 from "../src/assets/Image/vivo/y400.jpg";
import t4pro from "../src/assets/Image/vivo/t4pro.jpg";
import x200fe4g from "../src/assets/Image/vivo/x200fe4g.jpg";
import t4ultra5g from "../src/assets/Image/vivo/t4ultra5g.jpg";
import v60 from "../src/assets/Image/vivo/v60.jpg";
import y4005g from "../src/assets/Image/vivo/y4005g.jpg";
import v505g from "../src/assets/Image/vivo/v505g.jpg";

// ✅ Xiaomi Imports (41–48)
import mi15ultra from "../src/assets/Image/xiomi/15ultra.jpg";
import mi15 from "../src/assets/Image/xiomi/15.jpg";
import mi14ultra from "../src/assets/Image/xiomi/14ultra.jpg";
import note14proplus from "../src/assets/Image/xiomi/14proplus.jpg";
import note14se from "../src/assets/Image/xiomi/14se.jpg";
import mi14civi from "../src/assets/Image/xiomi/14civi.jpg";
import mi14 from "../src/assets/Image/xiomi/14.jpg";
import mi14c from "../src/assets/Image/xiomi/14c.jpg";

// ✅ Realme Imports (49–50)
import realme15pro from "../src/assets/Image/realme/15pro.jpg";
import realmeP4pro from "../src/assets/Image/realme/p4pro.jpg";


// ✅ Product Array
export const Productslist = [
  // --- Samsung (1–10) ---
  { id: 1, brand: "Samsung", title: "Samsung Galaxy S25 Ultra", price: 105600, rating: "excellent", description: "Flagship model with 200MP camera, highest display specs, powerful performance.", category: "Mobile", image: s25ultra, fullimg: s25ultra, display: "true" },
  { id: 2, brand: "Samsung", title: "Samsung Galaxy S24 FE 5G", price: 34499, rating: "very good", description: "Fan Edition phone with balanced specs, value oriented.", category: "Mobile", image: s24fe, fullimg: s24fe },
  { id: 3, brand: "Samsung", title: "Samsung Galaxy A55 5G", price: 23999, rating: "good", description: "Upper-mid-range Samsung phone with good display & battery.", category: "Mobile", image: a55, fullimg: a55 },
  { id: 4, brand: "Samsung", title: "Samsung Galaxy F17 5G", price: 14499, rating: "good", description: "Budget 5G phone with decent camera & large battery.", category: "Mobile", image: f17, fullimg: f17 },
  { id: 5, brand: "Samsung", title: "Samsung Galaxy A35 5G", price: 20099, rating: "good", description: "Balanced performance and features in mid-range.", category: "Mobile", image: a35, fullimg: a35 },
  { id: 6, brand: "Samsung", title: "Samsung Galaxy S24 5G", price: 49450, rating: "very good", description: "Flagship level display & camera, smaller than Ultra.", category: "Mobile", image: s24, fullimg: s24 },
  { id: 7, brand: "Samsung", title: "Samsung Galaxy A17 5G", price: 18999, rating: "good", description: "Affordable 5G Samsung model with modern features.", category: "Mobile", image: a17, fullimg: a17 },
  { id: 8, brand: "Samsung", title: "Samsung Galaxy S25 FE", price: 62999, rating: "very good", description: "FE version of the S-series with premium features.", category: "Mobile", image: s25, fullimg: s25 },
  { id: 9, brand: "Samsung", title: "Samsung Galaxy A56 5G", price: 37999, rating: "very good", description: "Newer mid-range model with upgraded specs.", category: "Mobile", image: a56, fullimg: a56 },
  { id: 10, brand: "Samsung", title: "Samsung Galaxy M34 5G", price: 16999, rating: "good", description: "Part of M-series, big battery and smooth display.", category: "Mobile", image: m34, fullimg: m34 },

  // --- Apple (11–20) ---
  { id: 11, brand: "Apple", title: "iPhone 17 Pro Max", price: 169990, rating: "excellent", description: "Latest flagship with triple 48MP cameras, large display and top specs.", category: "Mobile", image: i17promax, fullimg: i17promax, display: "true" },
  { id: 12, brand: "Apple", title: "iPhone 17 Pro", price: 149990, rating: "excellent", description: "Pro version with same features as Pro Max but smaller.", category: "Mobile", image: i17pro, fullimg: i17pro },
  { id: 13, brand: "Apple", title: "iPhone 17", price: 89990, rating: "very good", description: "Standard 17 model with premium chipset and design.", category: "Mobile", image: i17, fullimg: i17 },
  { id: 14, brand: "Apple", title: "iPhone 17 Air", price: 79990, rating: "very good", description: "Slimmer version of the 17 lineup.", category: "Mobile", image: i17air, fullimg: i17air },
  { id: 15, brand: "Apple", title: "iPhone 16 Pro Max", price: 130990, rating: "excellent", description: "Previous gen flagship with premium features.", category: "Mobile", image: i16promax, fullimg: i16promax },
  { id: 16, brand: "Apple", title: "iPhone 16 Pro", price: 109900, rating: "excellent", description: "Pro version of iPhone 16 with better camera and build.", category: "Mobile", image: i16pro, fullimg: i16pro },
  { id: 17, brand: "Apple", title: "iPhone 16 Plus", price: 79990, rating: "very good", description: "Larger version of iPhone 16.", category: "Mobile", image: i16plus, fullimg: i16plus },
  { id: 18, brand: "Apple", title: "iPhone 16", price: 69990, rating: "very good", description: "Base model with modern features.", category: "Mobile", image: i16, fullimg: i16 },
  { id: 19, brand: "Apple", title: "iPhone 15 Pro Max", price: 134900, rating: "excellent", description: "High end previous flagship.", category: "Mobile", image: i15promax, fullimg: i15promax },
  { id: 20, brand: "Apple", title: "iPhone 15", price: 60000, rating: "good", description: "Standard iPhone 15 with solid features.", category: "Mobile", image: i15, fullimg: i15 },

  // --- OnePlus (21–30) ---
  { id: 21, brand: "OnePlus", title: "OnePlus 13", price: 69999, rating: "excellent", description: "Flagship performance with Snapdragon 8 Elite.", category: "Mobile", image: oneplus13, fullimg: oneplus13, display: "true" },
  { id: 22, brand: "OnePlus", title: "OnePlus 13s 5G", price: 54999, rating: "very good", description: "Compact flagship with high refresh display.", category: "Mobile", image: oneplus13s, fullimg: oneplus13s },
  { id: 23, brand: "OnePlus", title: "OnePlus 12R", price: 39999, rating: "very good", description: "Balanced performance and camera setup.", category: "Mobile", image: oneplus12r, fullimg: oneplus12r },
  { id: 24, brand: "OnePlus", title: "OnePlus Nord CE 5 5G", price: 24997, rating: "good", description: "Mid-range 5G phone with decent specs.", category: "Mobile", image: nordce5, fullimg: nordce5 },
  { id: 25, brand: "OnePlus", title: "OnePlus Nord 5 5G", price: 31998, rating: "very good", description: "Upper mid-tier Nord series.", category: "Mobile", image: nord5, fullimg: nord5 },
  { id: 26, brand: "OnePlus", title: "OnePlus 13R 5G", price: 42999, rating: "very good", description: "Flagship-lite with strong performance.", category: "Mobile", image: oneplus13r, fullimg: oneplus13r },
  { id: 27, brand: "OnePlus", title: "OnePlus Nord CE 4 Lite 5G", price: 16998, rating: "good", description: "Budget 5G option with long battery.", category: "Mobile", image: nordce4lite, fullimg: nordce4lite },
  { id: 28, brand: "OnePlus", title: "OnePlus Nord CE 4 5G", price: 19499, rating: "good", description: "Mid-budget 5G with balanced features.", category: "Mobile", image: nordce4, fullimg: nordce4 },
  { id: 29, brand: "OnePlus", title: "OnePlus 11", price: 54999, rating: "excellent", description: "Previous flagship still powerful.", category: "Mobile", image: oneplus11, fullimg: oneplus11 },
  { id: 30, brand: "OnePlus", title: "OnePlus 12", price: 69999, rating: "excellent", description: "Latest full-spec flagship.", category: "Mobile", image: oneplus12, fullimg: oneplus12 },

  // --- Vivo (31–40) ---
  { id: 31, brand: "Vivo", title: "Vivo X200 FE 5G", price: 52990, rating: "very good", description: "Premium specs with 6500mAh battery, Zeiss camera, 90W charging.", category: "Mobile", image: x200fe, fullimg: x200fe, display: "true" },
  { id: 32, brand: "Vivo", title: "Vivo T4 Ultra", price: 36950, rating: "very good", description: "Flagship performance with premium display.", category: "Mobile", image: t4ultra, fullimg: t4ultra },
  { id: 33, brand: "Vivo", title: "Vivo V50", price: 32999, rating: "good", description: "Mid-range phone with Zeiss optics.", category: "Mobile", image: v50, fullimg: v50 },
  { id: 34, brand: "Vivo", title: "Vivo Y400 5G", price: 21999, rating: "good", description: "6.67-inch AMOLED, Snapdragon 4 Gen 2, 90W charging.", category: "Mobile", image: y400, fullimg: y400 },
  { id: 35, brand: "Vivo", title: "Vivo T4 Pro", price: 27999, rating: "good", description: "Balanced mid-tier with good performance.", category: "Mobile", image: t4pro, fullimg: t4pro },
  { id: 36, brand: "Vivo", title: "Vivo X200 FE", price: 52990, rating: "very good", description: "Mid/high range Vivo phone with premium features.", category: "Mobile", image: x200fe4g, fullimg: x200fe4g },
  { id: 37, brand: "Vivo", title: "Vivo T4 Ultra 5G", price: 36950, rating: "very good", description: "Upper mid-range with telephoto lens and big battery.", category: "Mobile", image: t4ultra5g, fullimg: t4ultra5g },
  { id: 38, brand: "Vivo", title: "Vivo V60", price: 36999, rating: "very good", description: "Latest Vivo V series flagship-lite model.", category: "Mobile", image: v60, fullimg: v60 },
  { id: 39, brand: "Vivo", title: "Vivo Y400 5G (2024)", price: 21999, rating: "good", description: "Mid-range AMOLED display 120Hz, Snapdragon 4 Gen 2.", category: "Mobile", image: y4005g, fullimg: y4005g },
  { id: 40, brand: "Vivo", title: "Vivo V50 5G", price: 32999, rating: "good", description: "Premium mid-range device with strong specs.", category: "Mobile", image: v505g, fullimg: v505g },

  // --- Xiaomi (41–48) ---
  { id: 41, brand: "Xiaomi", title: "Xiaomi 15 Ultra", price: 109998, rating: "excellent", description: "Flagship Ultra model with top-spec camera.", category: "Mobile", image: mi15ultra, fullimg: mi15ultra, display: "true" },
  { id: 42, brand: "Xiaomi", title: "Xiaomi 15", price: 64999, rating: "excellent", description: "Premium flagship with high refresh screen.", category: "Mobile", image: mi15, fullimg: mi15 },
  { id: 43, brand: "Xiaomi", title: "Xiaomi 14 Ultra", price: 99999, rating: "excellent", description: "Ultra tier with advanced camera setup.", category: "Mobile", image: mi14ultra, fullimg: mi14ultra },
  { id: 44, brand: "Xiaomi", title: "Redmi Note 14 Pro+ 5G", price: 29899, rating: "very good", description: "Mid-range Pro+ with strong camera.", category: "Mobile", image: note14proplus, fullimg: note14proplus },
  { id: 45, brand: "Xiaomi", title: "Redmi Note 14 SE 5G", price: 14999, rating: "good", description: "Budget 5G model with good battery.", category: "Mobile", image: note14se, fullimg: note14se },
  { id: 46, brand: "Xiaomi", title: "Xiaomi 14 Civi Limited Edition", price: 39999, rating: "very good", description: "Stylish Civi series limited edition.", category: "Mobile", image: mi14civi, fullimg: mi14civi },
  { id: 47, brand: "Xiaomi", title: "Xiaomi 14 Civi", price: 28390, rating: "good", description:  "Balanced mid-high range Civi model with sleek design and selfie-focused features.",category: "Mobile", image: mi14, fullimg: mi14 },
  { id: 48, brand: "Xiaomi", title: "Xiaomi Redmi 14C 5G", price: 10999, rating: "good", description: "Entry/mid-range 5G phone, good battery & basic features for daily use.", category: "Mobile", image: mi14c, fullimg: mi14c },
  { id: 49, brand: "Realme", title: "Realme 15 Pro 5G", price: 31999, rating: "very good", description: "Recent Realme flagship with Snapdragon 7 Gen 4, 50+50 MP rear cameras, 80W fast charging, 144Hz AMOLED display.", category: "Mobile", image: realme15pro, fullimg: realme15pro, display: "true" },
  { id: 50, brand: "Realme", title: "Realme P4 Pro 5G", price: 23499, rating: "good", description: "Upper-mid-range Realme model with Dimensity 7400/7 Gen 4 chipset, 144Hz display and solid 50MP camera.", category: "Mobile", image: realmeP4pro, fullimg: realmeP4pro }
]