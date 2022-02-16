import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import ProductsRow from "./components/productsrow";
import ChefOfTheWeek from "./components/chefoftheweek";
import Footer from "./components/footer";
import { getData } from "./api/apiactions";

function App() {
  const [cuisineList, setCuisineList] = useState([]),
    [popularWeekFoodList, setPopularWeekFoodList] = useState([]),
    [chefWeek, setChefWeek] = useState({});
  useEffect(() => {
    getData()
      .then((res) => {
        if (res.data.success) {
          const { cuisine_list, popularweek, chefweek } = res.data.data;
          console.log("Running");
          setCuisineList(cuisine_list);
          setPopularWeekFoodList(popularweek);
          setChefWeek(chefweek[0]);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar cuisineList={cuisineList} />
      <ProductsRow popularWeekFoodList={popularWeekFoodList} />
      <ChefOfTheWeek chefWeek={chefWeek} />
      <Footer />
    </div>
  );
}

export default App;
