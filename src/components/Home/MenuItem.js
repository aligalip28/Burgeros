import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { AddCard } from "@mui/icons-material";

import React from "react";

function MenuItem({ id, image, name, content, price }) {
  return (
    <>
      <Card
        className="w-80 h-auto block mx-auto shadow-none text-center lg:w-72   "
        key={id}
      >
        <img
          src={image}
          alt="cardImage"
          className="relative md:top-60 md:right-16 top-8"
          width={120}
        />

        <CardBody className="bg-regal-gray p-10 flex flex-col rounded-t-lg">
          <Typography variant="h2" color="blue-gray" className="mb-2 font-bold">
            {name}
          </Typography>
          <Typography className="mt-2">{content}</Typography>
        </CardBody>
        <CardFooter className="pt-0 italic text-white text-2xl font-bold bg-regal-gray p-6 flex justify-end items-center rounded-b-lg">
          <Typography variant="h3" className="mb-2 mx-3">
            {price} Tl
          </Typography>
          <Button className="p-2 rounded-md">
            <AddCard />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default MenuItem;
