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
        console.log("for sidebar")
        setSidebar(!sideBar)
    }

    return (
        <div className='relative flex justify-between bg-gary-400/10'>
            {/* mobile menu */}
            <div className="md:hidden sidebar">
                <div className='flex m-2'>
                    <a><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-6 mx-3 mt-2" /></a>
                    <button className="mobile-menu-button" onClick={viewBar}>
                        <a className="pt-4 pl-2 text-l text-blue-600/100"><i class="fas fa-bars"></i></a>
                    </button>

                </div>



            </div>
            {/* sidebar */}
            <div className='sidebar bg-white h-15 space-y-6 px-2 bg-gary-400/10
            absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
                
                    <div className='flex mx-3 my-2'>
                        <a><img src="https://app.doctegrity.com/static/media/logo-dark.0ce46e93.svg" class="h-6 ml-2 mt-2" /></a>
                        <button className="pt-2 pl-16 text-l text-blue-500/100" onClick={viewBar} ><i class="fas fa-bars"></i></button>

                    </div>

                


            </div>
            <div className="flex" style={{fontWeight:300}}>
                <button id="dropDownButton2" data-dropdown-toggle='dropdown2'
                    className="bg-white text-gray-600/80 py-2 px-4 rounded inline-flex items-center text-sm"
                >
                    Country <i class="fas fa-caret-down ml-1"></i>
                </button>
                <div id="dropdown2" className="hidden z-10 w-36 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="pl-3" >
                        <li className="pt-1 text-gray-600/80 hover:text-[#556ee5] flex text-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" className="h-4 w-8 m-1 pl-2" />
                            <a className="pt-0.5">Spanish </a>
                        </li>
                        <li className="pt-1 text-gray-600/80 hover:text-[#556ee5] flex text-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" className="h-4 w-8 m-1 pl-2" />
                            <a className="pt-0.5">English </a>
                        </li>
                        <li className="pt-1 text-gray-600/80 hover:text-[#556ee5] flex text-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" className="h-4 w-8 m-1 pl-2" />
                            <a className="pt-0.5">German </a>
                        </li>
                        <li className="py-1 text-gray-600/80 hover:text-[#556ee5] flex text-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" className="h-4 w-8 m-1 pl-2" />
                            <a className="pt-0.5">Italian </a>
                        </li>
                    </ul>
                </div>

                <a className="p-4 text-l"><i class="far fa-bell"></i></a>

                {/* <label><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-8 mx-3 mt-2" /></label> */}


                <div class="group inline-block relative">
                    <button class="bg-white text-gray-700/50 font-semibold py-2 px-4 rounded inline-flex items-center w-32">
                        <span class="mr-1"><img src="https://app.doctegrity.com/static/media/logo.bbf7c725.svg" class="h-5 mx-3 mt-3" />
                        </span>

                    </button>
                    <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                        <Link href={'/profile'}><li class="">
                            <a class="rounded-t bg-white hover:text-[#556ee5] text-sm py-2 px-4 block whitespace-no-wrap"
                            > <i class="far fa-user px-2"></i> Profile</a>
                        </li></Link>
                        <li class="">
                            <a class="bg-white hover:text-[#556ee5] text-sm py-2 px-4 block whitespace-no-wrap"
                            > <i class="fas fa-power-off px-2 text-red-500/70"></i> Logout</a>
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
