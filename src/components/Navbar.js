import React from "react";
import logo from "../assets/Logo.svg";
import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

function Navbar({ cart }) {
  const navigation = [
    { name: "Anasayfa", href: "/Burgeros/", current: true },
    { name: "Menü", href: "/Burgeros/menu", current: false },
    { name: "Hakkımızda", href: "/Burgeros/about", current: false },
    { name: "İletişim", href: "/Burgeros/contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className=" bg-regal-gray w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <img src={logo} alt="Logo" width={80} />
                <div className="flex flex-shrink-0 items-center content-center self-center sm:ms-auto">
                  <div className="hidden sm:ml-6 sm:block items-end">
                    <div className="flex space-x-6 uppercase mainNav">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? " text-white"
                              : "text-gray-400 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      <div className="flex justify-center items-center gap-3 text-xl ">
                        <Link to="/" className="text-yellow-500">
                          <FaUser />
                        </Link>
                        <Link to="/cart" className="text-yellow-500 flex gap-2">
                          <FaShoppingBasket className="text-2xl" />
                          {cart.length > 0 && (
                            <span className="bg-red-500 text-white rounded-lg absolute top-2 right-28 px-1 ">
                              {cart.length}
                            </span>
                          )}
                        </Link>
                        <button className="text-white p-2 rounded-lg bg-yellow-500">
                          Giriş Yap
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobil ekran linklerin olduğu kısım */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex justify-center items-center  gap-4">
                <Disclosure.Button to="/" className=" text-yellow">
                  <FaUser />
                </Disclosure.Button>
                <Disclosure.Button to="/" className="text-yellow ">
                  <FaShoppingBasket className="text-2xl" />
                  <span className="bg-red-500 text-white rounded-lg px-1 absolute top-64 right-44 font-semibold">
                    {cart.length}
                  </span>
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
