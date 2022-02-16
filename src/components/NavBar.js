import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";



export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    <NavLink to="/post" 
                    activeClassName="text-white"
                    className="inflex-flex items-centre py-3 px-6 mr-4 text-red-100 hover:text-red-400 text-4xl font-bold cursive tracking-widest">
                        hello
                    </NavLink>

                    <NavLink to="/project" 
                    activeClassName="text-white"
                    className="inflex-flex items-centre py-3 px-6 mr-4 text-red-100 hover:text-red-400 text-4xl font-bold cursive tracking-widest">
                        My first Blog
                    </NavLink>

                    <NavLink to="/home" 
                    activeClassName="text-white"
                    className="inflex-flex items-centre py-3 px-6 mr-4 text-red-100 hover:text-red-400 text-4xl font-bold cursive tracking-widest">
                    Home
                    </NavLink>
                </nav>
                <div className="inline-flex py-3,px-3 my-6  mr-10">
                    <SocialIcon url="https://www.linkedin.com/in/ananthu-venugopal-a00322217/" className=""  target="_blank"  fgColor="#fff" style={{height:35,width:35,}}/>
                </div>
            </div>
        </header>
    )
} 

