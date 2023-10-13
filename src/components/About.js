import React from "react";
import AboutHero from "../assets/About.jpg";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="">
        <img
          src={AboutHero}
          alt="AboutImg"
          className="w-screen h-[40rem] max-h-screen"
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

          <Link to="/about" className="opacity-80 text-lg font-bold">
            About
          </Link>
        </Breadcrumbs>
      </div>
      <div className="relative flex justify-center">
        <h1 className="text-black text-4xl font-[kavoon] mt-12">Hakkımızda</h1>
      </div>
      <div className="container mx-auto mb-16 mt-6">
        <p className="font-serif first-letter:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          aliquam eligendi quisquam dolor rem blanditiis eveniet, magnam
          reprehenderit nesciunt amet autem nisi doloremque tempora nostrum esse
          quam provident fuga quia? Eligendi hic nostrum ipsam pariatur officia,
          nesciunt at dicta ducimus, alias, aspernatur minima expedita!
          Consequatur illum quam veritatis odio explicabo non quos! Sint ipsa
          dignissimos non consequuntur ut aspernatur facilis. Quod, labore ab
          veniam, eos doloremque provident nulla eum odit enim cumque, aliquid
          quae vel delectus facere voluptatibus sint tenetur. Minus aliquid
          architecto veniam, ipsum blanditiis voluptatum. Quo, rem doloribus.
          Temporibus obcaecati quia, repellat nobis sit id aliquid consectetur
          pariatur porro ullam perspiciatis inventore eius praesentium facilis
          laborum odit, eveniet beatae fuga blanditiis in! Deserunt sit facere
          et laborum non! Natus culpa soluta esse blanditiis incidunt eius a,
          reprehenderit quibusdam cum iusto nesciunt ducimus animi corrupti fuga
          laborum. Sapiente accusamus corrupti, quo ratione tempora fugiat eum
          veritatis aliquam voluptate esse! Quo minima ipsa impedit nam ab
          doloribus nesciunt, magnam similique soluta molestiae nostrum saepe
          unde nihil! Odit quas minima officia adipisci a temporibus, distinctio
          est ex minus. Dolorem, quis est. Consequuntur soluta distinctio quas
          temporibus et maxime iure, deleniti totam asperiores recusandae,
          voluptatibus quidem vitae at laborum! Eum praesentium nam possimus
          eaque at! Hic corporis dolore omnis culpa, asperiores dicta! Illo
          repellendus nesciunt vitae doloribus rem consequuntur culpa ducimus,
          assumenda ex ad, distinctio animi minima cum dolores mollitia officia
          temporibus quas molestiae repellat dolor dolorum ea? Sed nemo
          asperiores incidunt. Perferendis incidunt deleniti aperiam distinctio,
          ea tenetur saepe dolores molestiae reprehenderit. Facere, neque
          quisquam molestias quae architecto vitae est ex adipisci praesentium
          eligendi, cumque earum id libero temporibus, odio rerum? Dolorem optio
          ratione iste obcaecati laborum magni tempore magnam ullam, illum
          beatae assumenda itaque commodi! Soluta recusandae amet cum similique
          mollitia illum, autem quod ex culpa quia, at aut dolorem?
        </p>
      </div>
    </>
  );
}

export default About;
