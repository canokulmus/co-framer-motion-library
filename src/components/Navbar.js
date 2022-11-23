import React from 'react'
import { menuAtom } from '../atom/menu'
import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = ({ isMenuOpen, toggleMenu }) => {

    const [menu, setMenu] = useAtom(menuAtom)

    return (
        <div className='md:col-span-1 md:flex md:justify-end bg-white'>
            <nav className='text-right'>
                <div className="flex justify-between items-center">
                    <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                        <a href="/">
                            {/* <img src="logo.png" className=' w-52' alt="CO-Tech Logo" /> */}
                            Framer Library
                        </a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
                        <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>

                <ul className={`text-sm mt-6 py-3 ${!isMenuOpen && "hidden"} md:block`}>
                    {menu.map(item => {

                        return <li className='py-2' key={item.id}>
                            <Link to={`${item.link}`} className={`px-4 text-lg flex justify-end border-r-4 hover:text-primary ${item.active ? "border-primary font-extrabold text-primary" : "border-white"}`}>
                                <span>{item.text}</span>
                                {item.icon}
                            </Link>
                        </li>
                    }
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar