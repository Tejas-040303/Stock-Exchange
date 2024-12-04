import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log("Success");
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
    <div className="orders">
      <div className="no-orders">
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>price</th>
                <th>Buy/Sell</th>
              </tr>

              {allOrders.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}.</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode.toUpperCase()}</td>
                  </tr>
                );
              })}
            </table>
          </div>       
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
    </>
  );
};

export default Orders;
