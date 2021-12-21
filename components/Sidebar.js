import Link from "next/link"


const Sidebar = () => {
    return (
        <>
            <div className="md:hidden">
                <nav className="mt-3 ml-2">
                    <Link href={'/'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i></a></Link>
                    <Link href={'/health'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-syringe"></i></a></Link>
                    <Link href={'/message'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-comment-medical"></i></a></Link>
                    <Link href={'/behave'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-stethoscope"></i></a></Link>
                    <div class="group inline-block relative">
                        <button class="bg-gray-300/10 text-gray-700 font-semibold py-2 rounded inline-flex items-center">
                            <span class="mr-1">
                                <a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i>
                                <i class="fas fa-chevron-down"></i></a>
                            </span>

                        </button>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link href={'/consult/schedule'}><li class="">
                                <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                >Schedule a Consultation</a>
                            </li></Link>
                            <Link href={'/consult/myconsult'}><li class="">
                                <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                >My consultaion</a>
                            </li></Link>

                        </ul>
                    </div>


                    {/* <a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i></a> */}
                    <Link href={'/profile'}><a className='text-xl block py-2 5 px-4 hover:text-blue-500/100'><i class="far fa-user-circle"></i></a></Link>

                </nav>
            </div>
            <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <nav >
                    <Link href={'/'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i> Dashboard</a></Link>
                    <Link href={'/health'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-syringe"></i> Health Record</a></Link>
                    <Link href={'/message'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-comment-medical"></i> Message a Doctor</a></Link>
                    <Link href={'/behave'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-stethoscope"></i> Behavioral Health</a></Link>

                    <div class="group inline-block relative">
                        <button class="bg-gray-300/10 text-gray-700 py-2 rounded inline-flex items-center">
                            <span class="mr-1">
                                <a className='text-md block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i> Consultaion  <i class="fas fa-chevron-down"></i></a>
                            </span>

                        </button>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link href={'/consult/schedule'}><li class="">
                                <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:text-blue-500/100"
                                >Schedule a Consultation</a>
                            </li></Link>
                            <Link href={'/consult/myconsult'}><li class="">
                                <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:text-blue-500/100"
                                >My consultaion</a>
                            </li></Link>

                        </ul>
                    </div>
                    {/* <a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="fas fa-briefcase"></i> Consultaion</a> */}
                    <Link href={'/profile'}><a className='text-base block py-2 5 px-4 hover:text-blue-500/100'><i class="far fa-user-circle"></i> Profile</a></Link>

                </nav>
            </div>
        </>
    )
}

export default Sidebar
