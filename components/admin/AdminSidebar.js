import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useRef, useState } from 'react'

const AdminSidebar = () => {
    return (
        <>
            <div className="md:hidden " >

                <nav className="mt-3 ml-2">
                    <Link href={'/'}><a className='text-l text-gray-600/80 block py-4 5 px-4 hover:text-blue-500/100'><i class="fas fa-home"></i></a></Link>
                    <Link href={'/health'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-user-friends"></i></a></Link>
                    <Link href={'/message'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-city"></i></a></Link>
                    <Link href={'/behave'}><a className='text-l text-gray-600/80 block py-4 px-4 hover:text-blue-500/100'><i class="fas fa-users"></i></a></Link>
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
            md:relative md:translate-x-0 transition duration-200 ease-in-out " style={{fontWeight:400}}>

                <nav >
                    <Link href={'/'}><a className='text-sm block pb-3 pt-6 text-gray-600/80 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-home pt-1"></i><p className="pl-3"> Dashboard</p></a></Link>
                    <Link href={'/Admin/groups'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-friends"></i><p className="pl-3">Groups</p></a></Link>
                    <Link href={'/Admin/company'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-city"></i> <p className="pl-3">Companies</p></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-users"></i> <p className="pl-3">Members</p></a></Link>

                    {/* <div class=" bg-[#fafafb]"> */}

                    <Menu as="div" className='py-3 w-full'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-cog mr-3"></i>Services<i class="fas fa-caret-down ml-28"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Brands
                            </Menu.Item >
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                partners
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>


                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-stethoscope mr-3"></i>Consultaion<i class="fas fa-caret-down ml-[88px]"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                All Consultaions
                            </Menu.Item >
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Messages
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>


                    <Link href={'/profile'}><a className='text-sm text-gray-600/80 block py-3 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-nurse pt-1"></i><p className="pl-3 "> Doctors</p></a></Link>
                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-file-prescription mr-4"></i>RxGroup<i class="fas fa-caret-down ml-28"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxGroup
                            </Menu.Item>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxReport
                            </Menu.Item >
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxPresciptionList
                            </Menu.Item>
                            <Menu.Item as='div' className="hover:text-blue-500/100 my-2">
                                RxArchive
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>

                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-clipboard-list"></i> <p className="pl-3">Logs</p></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="far fa-user"></i> <p className="pl-3">Members</p></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-lock"></i> <p className="pl-3">Password Management</p></a></Link>
                </nav>
            </div>
        </>
    )
}

export default AdminSidebar
