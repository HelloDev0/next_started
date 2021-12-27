import Link from "next/link"


const Sidebar = () => {
    return (
        <>
            <div className="md:hidden " style={{ fontFamily: "Roboto", fontWeight: 400 }}>
                
                <nav className="mt-3 ml-2">
                    <Link href={'/'}><a className='text-l text-gray-600/80 block py-4 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i></a></Link>
                    <Link href={'/health'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-syringe"></i></a></Link>
                    <Link href={'/message'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-comment-medical"></i></a></Link>
                    <Link href={'/behave'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-stethoscope"></i></a></Link>
                    <div class="group inline-block relative">
                        <button class="bg-white text-gray-600/80 font-semibold py-2 rounded inline-flex items-center">
                            <span class="mr-1">
                                <a className='text-xs block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i>
                                    <i class="fas fa-chevron-down"></i></a>
                            </span>

                        </button>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link href={'/consult/schedule'}><li class="">
                                <a class="rounded-t bg-white hover:text-blue-500/80 py-2 px-4 block whitespace-no-wrap"
                                >Schedule a Consultation</a>
                            </li></Link>
                            <Link href={'/consult/myconsult'}><li class="">
                                <a class="bg-white hover:text-blue-500/80 py-2 px-4 block whitespace-no-wrap"
                                >My consultaion</a>
                            </li></Link>

                        </ul>
                    </div>


                    {/* <a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i></a> */}
                    <Link href={'/profile'}><a className='text-xl text-gray-600/80 block py-2 5 px-4 hover:text-blue-500/100'><i class="far fa-user-circle"></i></a></Link>

                </nav>
            </div>
            <div className="absolute inset-y-0 left-0 transform -translate-x-full
            md:relative md:translate-x-0 transition duration-200 ease-in-out "
            >
                
                <nav >
                    <Link href={'/'}><a className='text-sm block pb-3 pt-6 text-gray-600/80 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-home pt-1"></i><p className="ml-3"> Dashboard</p></a></Link>
                    <Link href={'/health'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-syringe pt-1"></i> <p className="pl-3">Health Record</p></a></Link>
                    <Link href={'/message'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-comment-medical pt-1"></i> <p className="pl-3">Message a Doctor</p></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-stethoscope pt-1"></i> <p className="pl-3">Behavioral Health</p></a></Link>

                    <div class="group inline-block relative">
                        <button class="text-sm text-gray-600/80 hover:gray-500/100 py-3 rounded inline-flex items-center">
                            <span class="mr-1">
                                <a className='text-sm block 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-briefcase pt-1"></i><p className="pl-3 pb-1"> Consultaion </p> <i class="fas fa-chevron-down text-xs pl-4" ></i></a>
                            </span>

                        </button>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link href={'/consult/schedule'}><li class="">
                                <a class="rounded-t text-sm w-60 text-gray-600/80 bg-white py-3 px-4 block whitespace-no-wrap hover:text-blue-500/100"
                                >Schedule a Consultation</a>
                            </li></Link>
                            <Link href={'/consult/myconsult'}><li class="">
                                <a class="text-gray-600/80 text-sm bg-white py-3 px-4 block whitespace-no-wrap hover:text-blue-500/100"
                                >My consultaion</a>
                            </li></Link>

                        </ul>
                    </div>
                    {/* <a className='text-base block py-3 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i> Consultaion</a> */}
                    <Link href={'/profile'}><a className='text-sm text-gray-600/80 block py-3 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="far fa-user-circle pt-1"></i><p className="pl-3 "> Profile</p></a></Link>

                </nav>
            </div>
        </>
    )
}

export default Sidebar
