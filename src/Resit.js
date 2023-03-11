import React, { useState } from "react";
import PrintableReceipt from "./component/PrintableReceipt";
import SignIn from "./component/SignIn.js";
import "./styles.css";
function Resit() {
  const [foodItems, setFoodItems] = useState([
    { name: "muufo", price: 0.1 },
    { name: "suqaar", price: 1 },
    { name: "ansalato", price: 0.2 },
    { name: "baasto", price:1 },
    { name: "bariis", price: 1 },
    { name: "kalaankal", price: 4 },
    { name: "dheylo", price: 24 },
    { name: "baroosto", price: 1 },
    { name: "qare", price: 0.5 }



   
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, itemName]);
      setQuantities({ ...quantities, [itemName]: 1 });
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
      const newQuantities = { ...quantities };
      delete newQuantities[itemName];
      setQuantities(newQuantities);
    }
  };

  const handleQuantityChange = (event) => {
    const itemName = event.target.name;
    const quantity = parseInt(event.target.value);
    setQuantities({ ...quantities, [itemName]: quantity });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let total = 0;
    selectedItems.forEach((item) => {
      const selectedItem = foodItems.find((food) => food.name === item);
      const quantity = quantities[item];
      total += selectedItem.price * quantity;
    });
    setTotalPrice(total);
  };

  return (
    <>

    <div className="container">
    <div className="">
      <form onSubmit={handleSubmit} className="no-print">
      <h1 className="title">Restaurant managemanter</h1>

        {foodItems.map((food) => (
          <div className="food" key={food.name}>
            <label className="food__label">
              <input
                className="food__checkbox"
                type="checkbox"
                name={food.name}
                checked={selectedItems.includes(food.name)}
                onChange={handleCheckboxChange}
              />
              <span className="food__name">{food.name}</span>
              {/* <span className="food__price">${food.price.toFixed(2)}</span> */}
            </label>
            <input
              className="food__quantity"
              type="number"
              name={food.name}
              min="1"
              max="10"
              value={quantities[food.name] || ""}
              onChange={handleQuantityChange}
              disabled={!selectedItems.includes(food.name)}
            />
          </div>
        ))}
        <button className="submit-button" type="submit">
          CALCULATE
        </button>
        {totalPrice > 0 && (
          <button className="print-button" type="button" onClick={() => window.print()}>
             PRINT
          </button>
        )}
      {totalPrice>0 && (<button className="reset-btn" type="reset" onClick={() => {
          setSelectedItems([]);
          setQuantities({});
          setTotalPrice(0);
        }}>
          RESET
        </button>)}

      </form>
      </div>
      {totalPrice > 0 && (
        <PrintableReceipt
          selectedItems={selectedItems}
          quantities={quantities}
          foodItems={foodItems}
          totalPrice={totalPrice}
        />
      )}
      </div>
    
    </>
  );
}

export default Resit;
