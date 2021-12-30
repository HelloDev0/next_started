import React from 'react'

const myConsult = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >My Consultations </a>
                        <h3 className="text-xl text-white my-5">Manage Your Consultations</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>
                </div>
                <div className='grid grid-cols-6'>
                    <div className='col-span-6 float-left my-5'>
                        <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                        <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                    </div>
                </div>
                <div className="grid grid-cols-8 bg-white ">
                    <div className='col-span-8 m-5 '>
                        <table className='table-fixed w-full '>
                            <thead className='bg-gray-900/10 rounded w-full'>
                                <tr className="border-b border-gray-600/20 border-b-gray-600/10">
                                    <th className='pl-2 py-3 text-xs text-left'>Type</th>
                                    <th className='pl-2 py-3 text-xs text-left'>Patient</th>
                                    <th className='pl-2 py-3 text-xs text-left'>Scheduled</th>
                                    <th className='pl-2 py-3 text-xs text-left'>Physician</th>
                                    <th className='pl-2 py-3 text-xs text-left'>Status</th>
                                    <th className='pl-2 py-3 text-xs text-left'>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-3 px-[1rem] '><i class="fas fa-video text-sm"></i></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-blue-700 text-sm font-medium'>Md. Mobashir Raza</a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'><p>29 Dec 2021, 10:49 am IST</p>
                                        <br /><p>29 Dec 2021, 12:49 pm IST</p></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'>Doctor</a></td>
                                    <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>confirmed</button></td>
                                    <td className='py-8 lg:pl-2 flex'>
                                        <i class="fas fa-info-circle text-blue-600/90"></i>
                                        <i class="fas fa-print text-gray-700/70 mx-4"></i>
                                        <i class="fas fa-eye text-gray-700/70"></i></td>
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-3 px-[1.2rem] '><i class="fas fa-phone-volume text-sm"></i></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-blue-700 text-sm font-medium'>Lisa Hardin</a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'><p>29 Dec 2021, 10:49 am IST</p>
                                        <br /><p>29 Dec 2021, 12:49 pm IST</p></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'>Stephen Cohen</a></td>
                                    <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>confirmed</button></td>
                                    <td className='py-8 lg:pl-2 flex'>
                                        <i class="fas fa-info-circle text-blue-600/90"></i>
                                        <i class="fas fa-print text-gray-700/70 mx-4"></i>
                                        <i class="fas fa-eye text-gray-700/70"></i></td>
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-3 px-[1rem] '><i class="fas fa-video text-sm"></i></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-blue-700 text-sm font-medium'>Debiprasad Dash</a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'><p>29 Dec 2021, 10:49 am IST</p>
                                        <br /><p>29 Dec 2021, 12:49 pm IST</p></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'>Doctor</a></td>
                                    <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>confirmed</button></td>
                                    <td className='py-8 lg:pl-2 flex'>
                                        <i class="fas fa-info-circle text-blue-600/90"></i>
                                        <i class="fas fa-print text-gray-700/70 mx-4"></i>
                                        <i class="fas fa-eye text-gray-700/70"></i></td>
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-3 px-[1.2rem] '><i class="fas fa-phone-volume text-sm"></i></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-blue-700 text-sm font-medium'>Md. Mobashir Raza</a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'><p>29 Dec 2021, 10:49 am IST</p>
                                        <br /><p>29 Dec 2021, 12:49 pm IST</p></a></td>
                                    <td className='py-3 lg:pl-2'><a className='text-gray-700 text-xs font-medium'>Doctor</a></td>
                                    <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>confirmed</button></td>
                                    <td className='py-8 lg:pl-2 flex'>
                                        <i class="fas fa-info-circle text-blue-600/90"></i>
                                        <i class="fas fa-print text-gray-700/70 mx-4"></i>
                                        <i class="fas fa-eye text-gray-700/70"></i></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default myConsult
