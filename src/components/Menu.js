import React from "react";
import Menu1 from "../assets/menu.jpg";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MenuProduct from "./MenuProduct";
import { Data } from "../Helper/Data";
import { useState } from "react";
import Buttons from "./Buttons";

function Menu(props) {
  console.log(props);
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  return (
    <div>
      <div className="w-auto">
        <img
          src={Menu1}
          alt="MenuHero"
          className="w-screen md:h-10/12 max-h-screen"
          style={{
            backgroundSize: "content",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />

        <Breadcrumbs className="relative md:absolute flex justify-center md:top-24">
          <Link to="/" className="opacity-80 text-lg font-bold flex">
            Home
          </Link>

          <Link to="/menu" className="opacity-80 text-lg font-bold">
            Menu
          </Link>
        </Breadcrumbs>
      </div>
      <div className="text-center mt-6 text-5xl font-[kavoon]">Menü</div>
      <Buttons
        setItem={setItem}
        menuItems={menuItems}
        filterItem={filterItem}
      />
      <div className="container flex flex-wrap mx-auto mb-12">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-24 mx-auto mt-16">
          {item.map((product) => {
            return (
              <MenuProduct
                key={product.id}
                cart={props.cart}
                setCart={props.setCart}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
