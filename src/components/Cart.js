import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";

const Cart = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="container w-auto mx-auto h-auto flex items-center justify-center p-5">
      <div className="w-auto">
        <h1 className="text-4xl font-[kavoon] my-5">Sepetinizdeki Ürünler</h1>

        {cart.map((item) => (
          <Card
            key={item.id}
            className="md:flex justify-center bg-regal-gray text-white rounded-lg my-2 py-4 md:w-[56vh]"
          >
            <div className="grid grid-cols-2 gap-16">
              <div className="w-36 h-36 flex justify-center">
                <img className="w-48 h-auto" src={item.image} alt="ModalImg " />
              </div>
              <div className="">
                <Typography
                  className="font-[kavoon] text-4xl"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {item.name}
                </Typography>
                <Typography
                  className="text-yellow-500 font-[kavoon] text-3xl"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  {item.price}Tl
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {item.content}
                </Typography>
              </div>
            </div>
          </Card>
        ))}

        <hr className="my-4" />
        <p className="font-semibold text-xl">Toplam: {total}Tl</p>
        <Button
          onClick={emptyCart}
          className="bg-red-500 text-white px-4 py2 rounded w-full hover:bg-red-600 transition-all mt-4"
        >
          Sepeti Boşalt
        </Button>
      </div>
    </div>
  );
};

export default Cart;
