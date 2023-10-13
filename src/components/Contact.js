import React from "react";
import ContactImg from "../assets/Contact.jpg";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="">
        <img
          src={ContactImg}
          alt="AboutImg"
          className="w-screen h-[48rem] max-h-screen"
          style={{
            backgroundSize: "content",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <Breadcrumbs className="relative md:absolute flex justify-center  md:top-24 text-black md:text-white ">
          <Link to="/" className="opacity-80 text-lg font-bold flex">
            Home
          </Link>
          <Link to="/contact" className="opacity-80 text-lg font-bold">
            Contact
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Contact;
