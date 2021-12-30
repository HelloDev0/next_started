

const barnd = () => {
    return (
        <>
            <div className="grid grid-cols-8">
                <div className="col-span-5 m-5 ">
                <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='m-5 float-right col-span-3'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Brand</a>
                </div>
            </div>
            <div className="grid grid-cols-8 bg-white m-5 ">
                <div className='col-span-8 m-5 md:hidden lg:table sm:hidden'>
                    <table className='table-auto w-full '>
                        <thead className='bg-gray-900/10 rounded w-full'>
                            <tr className="border-2 border-b-gary-600/60">
                                <th className='pl-1 py-3 text-left text-xs'>#</th>
                                <th className='py-3 text-xs text-left'>Brand Name</th>
                                <th className='pl-2 py-3 text-left text-xs'>Member Welcome</th>
                                <th className='pl-2 py-3 text-left text-xs'>Update Email ID Notice</th>
                                <th className='pl-2 py-3 text-left text-xs'>Status</th>
                                <th className='pl-2 py-3 text-left text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>Doctegrity</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>d-8ab1b73b39ff469b8bb5b43adb054fb0_B</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>Doctegrity</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>d-8ab1b73b39ff469b8bb5b43adb054fb0_B</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>Doctegrity</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>d-8ab1b73b39ff469b8bb5b43adb054fb0_B</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-8 m-3 md:visible lg:invisible sm:visible">
                    <table className="table-auto w-full">
                             <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">#</td>
                                <td><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Brand Name</td>
                                <td><a className='text-gray-700 text-sm font-medium'>Doctegrity</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Member Welcome</td>
                                <td><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Update Email ID Notice</td>
                                <td><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Status</td>
                                <td><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Action</td>
                                <td className='py-3 lg:pl-1 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                    </table>
                    <table className="table-auto w-full mt-5">
                             <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">#</td>
                                <td><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>c</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Brand Name</td>
                                <td><a className='text-gray-700 text-sm font-medium'>Catheral</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Member Welcome</td>
                                <td><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Update Email ID Notice</td>
                                <td><a className='text-gray-700 text-sm font-medium'>d-73b5a6a40f654e73a16fd4c09c6414bd</a></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Status</td>
                                <td><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className="py-3">Action</td>
                                <td className='py-3 lg:pl-1 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                    </table>
                </div>
            </div>
            
        </>
    )
}

export default barnd
