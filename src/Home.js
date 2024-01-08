import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";


function Home(){
    const [clothes, setClothes] = useState(data);

  const chosenClothes = (searhTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searhTerm);
    setClothes(newClothes);
  }

  return (<div>
    <div className="cont">
      <h2 className="back">Free Standart Shiping </h2>
    </div>
    <Buttons filteredClothes ={chosenClothes}/>
    <Clothes itemsForSale={clothes}/>
  </div>

  )


}
export default Home;