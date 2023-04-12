import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "./SwitchTheme";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import logo from "@/images/logos/daobox.png";
import { useEffect, useState } from "react";

export function Navbar() {

  const [page, setPage] = useState("")

  useEffect(() => {
    const page = window.location.pathname || ""
    setPage(page)
  }, [])

  return (
    <Disclosure as="nav" className="bg-slate-800 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src={logo}
                    alt="DAOBox Logo"
                    width={300}
                    className="block h-8 w-auto lg:hidden"
                  />
                  <Image
                    src={logo}
                    alt="DAOBox Logo"
                    width={300}
                    className="hidden h-8 w-auto lg:block"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className={`inline-flex items-center border-b-2 ${page == "/" ? "border-indigo-500" : "border-transparent hover:border-gray-300"} 
                    px-1 pt-1 text-sm font-medium text-white`}
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center border-b-2 ${page == "/team" ? "border-indigo-500" : "border-transparent hover:border-gray-300"} 
                    px-1 pt-1 text-sm font-medium text-white hover:text-gray-700`}
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center border-b-2  ${page == "/projects" ? "border-indigo-500" : "border-transparent hover:border-gray-300"} 
                    px-1 pt-1 text-sm font-medium text-white hover:text-gray-700`}
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center border-b-2  ${page == "/calender" ? "border-indigo-500" : "border-transparent hover:border-gray-300"} 
                    px-1 pt-1 text-sm font-medium text-white hover:text-gray-700`}
                  >
                    Calendar
                  </a>
                  <a
                    href="/community"
                    className={`inline-flex items-center border-b-2  ${page == "/community" ? "border-indigo-500" : "border-transparent hover:border-gray-300"} 
                    px-1 pt-1 text-sm font-medium text-white hover:text-gray-700`}
                  >
                    Community
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="mr-4 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <SwitchTheme />
                </button>

                {/* Profile dropdown */}
                <ConnectButton />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <ConnectButton />
                <SwitchTheme />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
