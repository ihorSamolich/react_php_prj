import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  IconCategory,
  IconCheese,
  IconHome,
  IconLogout,
  IconMenu2,
  IconPhone,
  IconSettings,
  IconUser,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import MenuItem from "components/ui/linkNav.tsx";
import UserCurrent from "components/user/UserCurrent.tsx";
import { Fragment } from "react";
import { selectCurrentUser } from "store/slice/authSlice.ts";
import { useAppSelector } from "store/store.ts";
import { API_URL } from "utils/apiUrl.ts";
import { classNames } from "utils/classNames.ts";

const navigation = [
  { title: "Home", path: "/", icon: <IconHome /> },
  { title: "Categories", path: "/categories", icon: <IconCategory /> },
  { title: "Products", path: "/products", icon: <IconCheese /> },
  { title: "Contacts", path: "/contacts", icon: <IconPhone /> },
];
const userNavigation = [
  { name: "Your Profile", href: "#", icon: <IconUserCircle /> },
  { name: "Settings", href: "#", icon: <IconSettings /> },
  { name: "Sign out", href: "#", icon: <IconLogout /> },
];

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <img className="w-8 h-8" src="/shop.ico" alt="foodwaGon logotype" />
                <span className="font-title bg-clip-text text-transparent text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-300">
                  MonkeyShop
                </span>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <MenuItem
                      variants="ORANGE"
                      key={item.title}
                      title={item.title}
                      path={item.path}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {user ? (
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm">
                          <UserCurrent {...user} />
                        </Menu.Button>
                      ) : (
                        <MenuItem title="Sign In" path={"/login"} icon={<IconUser />} variants="ORANGE" />
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700",
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="relative inline-flex items-center border justify-center rounded-md bg-white p-2 text-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <IconX className="block h-6 w-6" /> : <IconMenu2 className="block h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <MenuItem
                  variants="ORANGE"
                  key={item.title}
                  title={item.title}
                  path={item.path}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center justify-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`${API_URL}/uploads/100_${user?.image}`}
                    alt={user?.name}
                  />
                </div>
                <div className="ml-3">
                  <div className="font-body font-bold leading-none text-black">{user?.name}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-orange-500 block rounded-md px-3 py-2 text-center text-body font-semibold hover:bg-orange-500 hover:text-white"
                  >
                    <div className="w-full flex items-center justify-center gap-5">
                      {item.icon}
                      {item.name}
                    </div>
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
