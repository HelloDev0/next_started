import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useRef, useState } from 'react'

const AdminSidebar = () => {
    return (
        <>
            <div className="md:hidden  mr-6" >

                <nav >
                    <Link href={'/'}><a className='text-sm block pb-3 pt-6 text-gray-600/80 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-home pt-1"></i></a></Link>
                    <Link href={'/Admin/groups'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-friends"></i></a></Link>
                    <Link href={'/Admin/company'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-city"></i> </a></Link>
                    <Link href={'/Admin/member'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-users"></i> </a></Link>

                    {/* <div class=" bg-[#fafafb]"> */}

                    <Menu as="div" className='py-3 w-full'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-cog mr-3"></i><i class="fas fa-caret-down xl:ml-28 lg:ml-10 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-2 my-2 text-gray-600/80 '>
                            <Link href={'/Admin/services/service'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item></Link>
                            <Link href={"/Admin/services/barnd"}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Brands
                            </Menu.Item ></Link>
                            <Link href={"/Admin/services/partner"}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                partners
                            </Menu.Item></Link>
                        </Menu.Items>
                    </Menu>


                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-stethoscope mr-3"></i><i class="fas fa-caret-down xl:ml-[88px] lg:ml-5 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-2 my-2 text-gray-600/80 '>
                            <Link href={'/Admin/consult/myConsult'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                All Consultaions
                            </Menu.Item ></Link>
                            <Link href={'/Admin/consult/search'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Messages
                            </Menu.Item></Link>
                        </Menu.Items>
                    </Menu>


                    <Link href={'/Admin/doctor'}><a className='text-sm text-gray-600/80 block py-3 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-nurse pt-1"></i><p className="pl-3 "></p></a></Link>
                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-file-prescription mr-4"></i><i class="fas fa-caret-down xl:ml-28 lg:ml-10 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-2 my-2 text-gray-600/80 '>
                            <Link href={'/Admin/Rxgroup/pharmacies'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxGroup
                            </Menu.Item></Link>
                            <Link href={'/Admin/Rxgroup/rxreport'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxReport
                            </Menu.Item ></Link>
                            <Link href={'/Admin/Rxgroup/rxprescriptionlist'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxPresciptionList
                            </Menu.Item></Link>
                            <Menu.Item as='div' className="hover:text-blue-500/100 my-2">
                                RxArchive
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>

                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-clipboard-list"></i></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="far fa-user"></i></a></Link>
                    <Link href={'/behave'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-lock"></i></a></Link>
                </nav>

            </div>
            <div className="absolute inset-y-0 left-0 transform -translate-x-full
            md:relative md:translate-x-0 transition duration-200 ease-in-out " style={{ fontWeight: 400 }}>

                <nav >
                    <Link href={'/'}><a className='text-sm block pb-3 pt-6 text-gray-600/80 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-home pt-1"></i><p className="pl-3"> Dashboard</p></a></Link>
                    <Link href={'/Admin/groups'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-friends"></i><p className="pl-3">Groups</p></a></Link>
                    <Link href={'/Admin/company'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-city"></i> <p className="pl-3">Companies</p></a></Link>
                    <Link href={'/Admin/member'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-users"></i> <p className="pl-3">Members</p></a></Link>

                    {/* <div class=" bg-[#fafafb]"> */}

                    <Menu as="div" className='py-3 w-full'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-cog mr-3"></i>Services<i class="fas fa-caret-down xl:ml-28 lg:ml-10 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Link href={'/Admin/services/service'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item></Link>
                            <Link href={"/Admin/services/barnd"}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Brands
                            </Menu.Item ></Link>
                            <Link href={"/Admin/services/partner"}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                partners
                            </Menu.Item></Link>
                        </Menu.Items>
                    </Menu>


                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-stethoscope mr-3"></i>Consultaion<i class="fas fa-caret-down xl:ml-[88px] lg:ml-5 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Link href={'/Admin/consult/myConsult'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                All Consultaions
                            </Menu.Item ></Link>
                            <Link href={'/Admin/consult/search'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Messages
                            </Menu.Item></Link>
                        </Menu.Items>
                    </Menu>


                    <Link href={'/Admin/doctor'}><a className='text-sm text-gray-600/80 block py-3 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-user-nurse pt-1"></i><p className="pl-3 "> Doctors</p></a></Link>
                    <Menu as="div" className='py-3'>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <i class="fas fa-file-prescription mr-4"></i>RxGroup<i class="fas fa-caret-down xl:ml-28 lg:ml-10 md:ml-2"></i>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Link href={"/Admin/Rxgroup/pharmacies"}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxGroup
                            </Menu.Item></Link>
                            <Link href={'/Admin/Rxgroup/rxreport'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxReport
                            </Menu.Item ></Link>
                            <Link href={'/Admin/Rxgroup/rxprescriptionlist'}><Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                RxPresciptionList
                            </Menu.Item></Link>
                            <Link href={'/Admin/Rxgroup/rxarchieve'}><Menu.Item as='div' className="hover:text-blue-500/100 my-2">
                                RxArchive
                            </Menu.Item></Link>
                        </Menu.Items>
                    </Menu>

                    <Link href={'/Admin/logs'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-clipboard-list"></i> <p className="pl-3">Logs</p></a></Link>
                    <Link href={'/Admin/profile'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="far fa-user"></i> <p className="pl-3">Profile</p></a></Link>
                    <Link href={'/Admin/password_management'}><a className='text-sm block py-3 text-gray-600/80 5 5 px-4 hover:text-blue-500/100 flex ml-3'><i class="fas fa-lock"></i> <p className="pl-3">Password Management</p></a></Link>
                </nav>
            </div>
        </>
    )
}

export default AdminSidebar
