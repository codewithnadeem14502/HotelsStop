import { useState } from "react";
import "./App.css";
import Card from "./component/Card";

const hotelsIndian = [
  {
    name: "TAJ LAKE PALACE",
    items: ["Breakfast ", "Lunch ", "Dinner"],
    place: " Pichola, Udaipur, Rajasthan 313001, India",
  },
  {
    name: "THE OBEROI UDAIVILAS",
    items: ["Buffet ", "Snacks ", "Drinks"],
    place:
      "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Pichola, Udaipur, Rajasthan",
  },
  {
    name: "THE LEELA PALACE ",
    items: ["Service ", "Barbecue ", "Cocktails "],
    place: "Lake, Pichola, Udaipur, Rajasthan 313001, India",
  },
];
const hotelsChinese = [
  {
    name: "The Peninsula Shanghai",
    items: ["Breakfast ", "Lunch ", "Dinner"],
    place: "No. 32 The Bund, 32 Zhongshan Dong Yi Road, Shanghai, China",
  },
  {
    name: "Aman at Summer Palace",
    items: ["Buffet ", "Snacks ", "Drinks"],
    place: " Gongmenqian Street, Summer Palace, Beijing, China",
  },
  {
    name: "The Upper House",
    items: ["Room Service ", "Barbecue ", "Cocktails "],
    place: "Pacific Place, 88 Queensway, Admiralty, Hong Kong",
  },
];
const hotelsItalian = [
  {
    name: "Hotel Il Pellicano",
    items: ["Breakfast ", "Lunch ", "Dinner"],
    place: "Località Sbarcatello, 58018 Porto Ercole GR, Italy",
  },
  {
    name: "Belmond Hotel Caruso",
    items: ["Buffet ", "Snacks ", "Drinks"],
    place: "Piazza San Giovanni del Toro, 2, 84010 Ravello SA, Italy",
  },
  {
    name: "Palazzo Avino",
    items: ["Room Service ", "Barbecue ", "Cocktails "],
    place: "Via San Giovanni del Toro, 28, 84010 Ravello SA, Italy",
  },
];
function App() {
  const [indian, setIndian] = useState(true);
  const [chinese, setChinese] = useState(false);
  const [italian, setItalian] = useState(false);
  function handleIndianHotel(e) {
    e.preventDefault();
    setIndian(true);
    setChinese(false);
    setItalian(false);
    console.log("India");
  }
  function handleChineseHotel(e) {
    e.preventDefault();
    setIndian(false);
    setChinese(true);
    setItalian(false);
    console.log("chinese");
  }
  function handleItalianHotel(e) {
    e.preventDefault();
    setIndian(false);
    setChinese(false);
    setItalian(true);
    console.log("italian");
  }
  let data = hotelsIndian;
  {
    indian == true
      ? (data = hotelsIndian)
      : chinese == true
      ? (data = hotelsChinese)
      : (data = hotelsItalian);
  }
  return (
    <>
      <h1 className="title">Hotel Near You</h1>
      <p className="subtitle"> world top hotel are list below </p>

      <div className="btnmaindiv">
        <div className="btndiv">
          <button className="btn" onClick={handleIndianHotel}>
            Indian
          </button>
          <button className="btn" onClick={handleChineseHotel}>
            Chinese{" "}
          </button>
          <button className="btn" onClick={handleItalianHotel}>
            Italian
          </button>
        </div>
      </div>

      {data.map((hotel, key) => (
        <Card name={hotel.name} place={hotel.place} items={hotel.items} />
      ))}
    </>
  );
}

export default App;
