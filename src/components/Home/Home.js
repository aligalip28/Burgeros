import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-auto hero-section ">
        <div
          className="w-screen bg-hero-pattern h-96 md:h-[43vw]"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <div className="container flex flex-col h-full mx-auto justify-center gap-y-8 p-5">
            <div>
              <h1 className="text-white text-5xl self-center">
                En İyi <br /> Hamburgerler
              </h1>
            </div>
            <div>
              <Link
                to="/menu"
                className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-all mt-4 "
              >
                Sipariş Ver
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Home;
