import ThemeToggler from "./Theme-Toggler"
import {Link} from "react-router-dom"
import Logo from "../logo.svg"

export default function Header() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                className="mr-3 h-6 sm:h-9"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ABC University
              </span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <ThemeToggler></ThemeToggler>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        ></div>
                    </div>
                </nav>
            </header>
        </>
    );
}
