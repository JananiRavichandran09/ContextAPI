import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import CarouselPage from "./CarouselPage";

const Navbar = () => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            <Link
              to="/"
              style={{
                color: "brown",
                fontFamily: "Mogra, system-ui",
                fontSize: "2rem",
                textDecoration: "none",
              }}
            >
              Brand World
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link" href="#!"></a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class=" btn-outline-dark"
                type="submit"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "orange",
                  border: "none",
                  padding: "5px 15px",
                }}
              >
                <Link
                  to="/cartPage"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {" "}
                    {cart.length}{" "}
                  </span>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
      <CarouselPage />
    </div>
  );
};

export default Navbar;
