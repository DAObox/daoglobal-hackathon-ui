import { navigation } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import logo from "@/images/logos/daobox.png";
import { useRecoilState } from "recoil";
import { navigation as navigationAtom } from "atom/atoms";

export default function MobileMenu() {

    const [open, setOpen] = useRecoilState(navigationAtom);
    const [path, setPath] = useState("")
    typeof window != "undefined" &&
    useEffect(() => {
      setPath(window.location.pathname)
    }, [window.location.pathname])

    return(
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={() => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto dark:bg-black bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        src={logo}
                        alt="DAOBox Logo"
                        width={300}
                        className="block h-8 w-auto lg:hidden"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name} >
                                <Link
                                  href={item.href}
                                  className={`flex items-center gap-x-3 rounded-md p-2 font-semibold leading-6 
                                  ${path == item.href ? "bg-daoboxg text-black" : "text-white hover:bg-daoboxg hover:text-black"}`}
                                >
                                  <item.icon
                                    className={`w-6 h-6 shrink-0 ${path == item.href ? "text-black" : "group-hover:text-white"}`}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <Link
                            href="/settings"
                            className={`group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6
                            ${typeof window != "undefined" && window.location.pathname == "/settings" ? "bg-daoboxg text-black" 
                            : "text-white hover:bg-daoboxg hover:text-black"}`}
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    )
}