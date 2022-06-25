import { Disclosure } from "@headlessui/react";
import { MenuIcon, SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigation } from "../utils/nav";
import Image from "next/image";
import {config} from "../utils/config";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = () => {
  const router = useRouter();

  const linkActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                  <div className="flex-shrink-0 flex items-center text-indigo-600">
                    <Link href="/">
                      <a>
                        <img
                            alt="Davide Imola"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            className="h-8 w-auto sm:h-10"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((nav) => (
                      <Link href={nav.href} key={nav.href}>
                        <a
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {nav.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {navigation.map((nav) => (
                  <Disclosure.Button as={Link} href={nav.href} key={nav.href}>
                    <a
                      className={classNames(
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                        linkActive(nav.href)
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      {nav.name}
                    </a>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
