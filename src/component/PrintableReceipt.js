import React from "react";
import "../styles.css"
import "../FoodOrderForm.css"

function PrintableReceipt({ selectedItems, quantities, foodItems, totalPrice }) {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const invoiceNumber = "#INV-" + Math.floor(Math.random() * 100000) + "-2023";
  const shsomali = totalPrice * 25;
  const somali = shsomali.toFixed(0) 

  const formattedDate = `${day}/${month}/${year}`
  return (
    <div className="paper">
      <div className="invoice-header">
        <h1>dabayare resturant</h1>
        <p>123 wadnaha Street</p>
        <p>Anytown, somalia  </p>
        <p>(+252) 61-5482302</p>
        <p>Invoice {invoiceNumber}</p>
        <p>Date: {formattedDate}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item) => {
            const selectedItem = foodItems.find((food) => food.name === item);
            const quantity = quantities[item];
            const subtotal = selectedItem.price * quantity;
            return (
              <tr key={item}>
                <td>{item}</td>
                <td>${selectedItem.price.toFixed(2)}</td>
                <td>{quantity}</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td className="sos" >${totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>SHILIN SOMALI(sos):</td>
            <td className="sos">{  somali}</td>
          </tr>
        </tbody>
      </table>
      <div className="invoice-footer">
        <p>Thank you for your business!</p>
        <p>Please come again soon.</p>
      </div>
    </div>
  );
}

export default PrintableReceipt;
