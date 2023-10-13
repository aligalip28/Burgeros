import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { AddCard } from "@mui/icons-material";
import { useState } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  boxShadow: 24,
  py: 5,
  px: 1,
};

function MenuProduct({ product, cart, setCart }) {
  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="w-80 block mx-auto shadow-lg lg:w-80 h-auto border-b-4 bg-regal-gray text-white">
        <CardHeader className="shadow-none flex justify-center items-center h-48 rounded-none rounded-bl-[100px]">
          <img
            onClick={handleOpen}
            className="h-auto object-center bg-white"
            src={product.image}
            alt="cardImage"
            width={120}
          />
        </CardHeader>
        <CardBody className="">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-xl font-semibold text-center"
          >
            {product.name}
          </Typography>
          <Typography className="mt-2">{product.content}</Typography>
        </CardBody>
        <CardFooter className="flex gap-6 relative bottom-0 italic text-xl ">
          <Button className="p-2 rounded-md" onClick={() => addToCart(product)}>
            <AddCard width={20} /> Sepete Ekle
          </Button>

          <Typography
            variant="h3"
            className="mb-2 text-yellow-500 font-serif text-2xl"
          >
            {product.price} Tl
          </Typography>
        </CardFooter>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="flex justify-center bg-regal-gray text-white rounded-lg"
        >
          <div className="grid grid-cols-2 gap-16">
            <div className="w-80 flex justify-center">
              <img
                className="w-48 h-auto"
                src={product.image}
                alt="ModalImg "
              />
            </div>
            <div className="">
              <Typography
                className="font-[kavoon] text-4xl"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {product.name}
              </Typography>
              <Typography
                className="text-yellow-500 font-[kavoon] text-3xl"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {product.price}Tl
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {product.content}
              </Typography>
              <div className="mt-5 font-[kavoon]">
                <Button
                  className="bg-yellow-500 text-white p-2 hover:bg-yellow-600 transition-all "
                  onClick={() => addToCart(product)}
                >
                  Sepete Ekle
                </Button>
                <Button className="bg-orange-500 text-white p-2 hover:bg-orange-600 transition-all mx-3">
                  Şimdi Satın Al
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MenuProduct;
