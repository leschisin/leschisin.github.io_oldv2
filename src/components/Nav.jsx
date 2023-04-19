import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useScrollPosition from "../hooks/useScrollPosition";

const links = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const scrollPosition = useScrollPosition();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex h-20 px-6 text-white transition-all ${
        parseInt(scrollPosition) > window.innerHeight - 80
          ? "bg-black bg-opacity-80 h-14"
          : ""
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="hover:border-b-2 border-rose-600 h-7 transition-all"
          >
            steve<span className="text-rose-600 text-xl">.</span>leschisin
          </Link>
        </div>
        <nav className="hidden sm:flex items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="ml-12 hover:border-b-2 border-rose-600 h-7 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <nav className="flex sm:hidden items-center">
          <button
            type="button"
            className="p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open mobile menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </div>
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Steve Leschisin</span>
              <span>steve.leschisin</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
