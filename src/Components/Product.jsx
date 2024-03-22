import React, { useContext } from "react";
import { cartContext } from "../App";

const Product = ({ item, index }) => {
  const { cart, setCart } = useContext(cartContext);
  const addCart = () => {
    setCart([...cart, item]);
  };
  const removeCart = () => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  return (
    <div>
      <div key={index}>
        <div className="container gy-3">
          <div
            className="col-sm"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
            }}
          >
            <div className="card h-100">
              <div className="card-body">
                <div style={{ textAlign: "center" }}>
                  <h4
                    style={{
                      color: "Purple",
                      textAlign: "center",
                      fontFamily: "cursive",
                     
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </h4>
                  <h5
                    style={{
                      color: "crimson",
                      textAlign: "center",
                      fontFamily: "cursive",
                      
                      fontWeight: "bold",
                    }}
                  >
                    {`Rs:${item.price}`}
                  </h5>

                  <p style={{  textAlign: "center" }}>
                    {item.description}
                  </p>
                  <img src={item.images} width={"250px"} height={"250px"} />
                </div>
                <br />

                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  {cart.includes(item) ? (
                    <button
                      onClick={removeCart}
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                      }}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      onClick={addCart}
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
