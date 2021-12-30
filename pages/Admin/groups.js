
const groups = () => {
    return (
        <>
            <div className='grid grid-cols-12 m-5'>
                <div className='col-span-9'>
                    <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='col-span-3'>
                    <a className='bg-blue-600/70 text-white text-xs py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Group</a>
                </div>
                </div>
                <div className="grid grid-cols-12 m-5 bg-white">
                <div className='col-span-12 m-5 '>
                    <table className='table-fixed w-full'>
                        <thead className='bg-gray-700/20 rounded'>
                            <tr >
                                <th className='py-3 pl-2 text-left text-xs'>#</th>
                                <th className='py-3 text-left text-xs'>Groups Name</th>
                                <th className='py-3 text-left text-xs'>Contact Name</th>
                                <th className='py-3 text-left text-xs'>Email</th>
                                <th className='py-3 text-left text-xs'>Phone</th>
                                <th className='py-3 text-left text-xs'>Status</th>
                                <th className='py-3 text-left text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>x</a></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-gray-700 text-xs font-medium'>Xcel Hr</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><i class="fas fa-edit text-gray-700/90"></i> <i class="fas fa-user-check text-[#34c38f] ml-3"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>p</a></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-gray-700 text-xs font-medium'>Prism Hr</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><i class="fas fa-edit text-gray-700/90"></i> <i class="fas fa-user-check text-[#34c38f] ml-3"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>p</a></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><a className='text-gray-700 text-xs font-medium'>Payroll Medics</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-1'><i class="fas fa-edit text-gray-700/90"></i> <i class="fas fa-user-check text-[#34c38f] ml-3"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default groups
