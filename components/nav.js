import Link from "next/link"
import { useState } from "react"



const Nav = () => {
    // const btn=document.querySelector('.mobile-menu-button')
    // const sideBar=document.querySelector(".sidebar")
    // btn.addEventListener("click",()=>{
    //     sideBar.querySelector.toggle("-translate-x-full")
    // })
    const [sidebar, setSidebar] = useState(false)
    const viewBar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className='relative  nd:flex flex justify-between bg-gary-400/10 '>
            {/* mobile menu */}
            <div className="md:hidden">
                <div className='flex'>
                    <a><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-8 mx-3 mt-2" /></a>
                    <button className="mobile-menu-button" onClick={viewBar}>
                        <a className="pt-2 pl-2 text-xl text-blue-600/100"><i class="fas fa-bars"></i></a>
                    </button>

                </div>
                {/* <nav className="mt-3 ml-2">
                    <Link href={'/'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i></a></Link>
                    <Link href={'/health'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-syringe"></i></a></Link>
                    <Link href={'/message'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-comment-medical"></i></a></Link>
                    <Link href={'/behave'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-stethoscope"></i></a></Link>
                    <a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i></a>
                    <Link href={'/profile'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="far fa-user-circle"></i></a></Link>

                </nav> */}


            </div>
            {/* sidebar */}
            <div className='bg-white h-15 space-y-6 px-2 bg-gary-400/10
            absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
                <div className="flex">
                    <div className='flex'>
                        <a><img src="https://app.doctegrity.com/static/media/logo-dark.0ce46e93.svg" class="h-8 ml-2 mt-2" /></a>
                        <a className="pt-2 pl-2 text-xl" ><i class="fas fa-bars"></i></a>

                    </div>

                </div>
                {/* <nav >
                    <Link href={'/'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i> Dashboard</a></Link>
                    <Link href={'/health'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-syringe"></i> Health Record</a></Link>
                    <Link href={'/message'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-comment-medical"></i> Message a Doctor</a></Link>
                    <Link href={'/behave'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-stethoscope"></i> Behavioral Health</a></Link>
                    <a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i> Consultaion</a>
                    <Link href={'/profile'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="far fa-user-circle"></i> Profile</a></Link>

                </nav> */}

            </div>
            <div className="flex">
                <button id="dropDownButton2" data-dropdown-toggle='dropdown2' 
                className="bg-gray-300/10 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                   Country <i class="fas fa-caret-down"></i>
                </button>
                <div id="dropdown2" className="hidden z-10 w-36 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="pl-3">
                        <li className="pt-1">
                            <a>Spanish </a>
                        </li>
                        <li className="pt-1">
                            <a>English </a>
                        </li>
                        <li className="pt-1">
                            <a>German </a>
                        </li>
                        <li className="py-1">
                            <a>Italian </a>
                        </li>
                    </ul>
                </div>
                {/* <select className="border-none bg-none max-h-10">
                    <option value="item-1" className="border-none bg-none">Spanish</option>
                    <option value="item-2" className="border-none bg-none">English</option>
                    <option value="item-3">German</option>
                    <option value="item-4">Italian</option>
                    <option value="item-4">Japan</option>
                </select> */}
                <a className="p-4 text-xl"><i class="far fa-bell"></i></a>

                {/* <label><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-8 mx-3 mt-2" /></label> */}

                
                    <div class="group inline-block relative">
                        <button class="bg-gray-300/10 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span class="mr-1"><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-6 mx-3 mt-3" />
                            </span>
                           
                        </button>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link href={'/profile'}><li class="">
                                <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                >Profile</a>
                            </li></Link>
                            <li class="">
                                <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                >Logout</a>
                            </li>
                            
                        </ul>
                    </div>
                
            </div>



        </div>



        // <div className="flex justify-between">
        //     <div className="flex">
        //         <a><img src="https://app.doctegrity.com/static/media/logo-dark.0ce46e93.svg" class="h-8 ml-2 mt-2" /></a>
        //         <a className="pt-2 pl-2 text-xl"><i class="fas fa-bars"></i></a>
        //     </div>
        //     <div className="flex">


        //         <select className="border-none bg-none">
        //             <option value="item-1" className="border-none bg-none">Spanish</option>
        //             <option value="item-2" className="border-none bg-none">English</option>
        //             <option value="item-3">German</option>
        //             <option value="item-4">Italian</option>
        //             <option value="item-4">Japan</option>
        //         </select>
        //         <a className="p-4 text-xl"><i class="far fa-bell"></i></a>
        //         <img className="h-12 pt-2 pr-2" src="https://app.doctegrity.com/static/media/default-avatar.ea5eeaeb.svg" alt="image" class="h-10" />
        //         <select>
        //             <option>user</option>
        //             <option>Log Out</option>
        //         </select>

        //     </div>
        // </div>
    )
}

export default Nav
