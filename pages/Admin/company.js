

const company = () => {
    return (
        <>
            <div className='grid grid-cols-12 m-5'>
                <div className='col-span-9'>
                    <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='col-span-3'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Company</a>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white m-5">
                <div className='col-span-12 m-5 bg-white '>
                    <table className='table-fixed w-full'>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr>
                                <th className='pl-1 py-3 text-left text-xs'>#</th>
                                <th className='pl-1 py-3 text-left text-xs '>Company Name</th>
                                <th className='pl-1 py-3 text-left text-xs'>Group Name</th>
                                <th className='pl-1 py-3 text-left text-xs'>Enrolled Members</th>
                                <th className='pl-1 py-3 text-left text-xs'>Total Members</th>
                                <th className='pl-1 py-3 text-left text-xs'>Status</th>
                                <th className='pl-1 py-3 text-left text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>C</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>Credit Risk Monitor</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-0'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 lg:mr-2 md:mr-1"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] md:ml-1"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>T</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>TEDC</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>22</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>22</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-0'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 lg:mr-2 md:mr-1"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] md:ml-1"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>F</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>Firm Foundation HR</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>Direct</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>28</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><a className='text-gray-700 text-xs font-medium'>32</a></td>
                                <td className='py-4 lg:pl-2 md:pl-0'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 lg:pl-2 md:pl-0'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 lg:mr-2 md:mr-1"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] md:ml-1"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default company
