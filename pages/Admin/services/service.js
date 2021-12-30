

const service = () => {
    return (
        <>
            <div className="grid grid-cols-8">
                <div className='m-8 float-right col-span-8'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Service</a>
                </div>
            </div>
            <div className="grid grid-cols-8 bg-white m-5">
            <div className='col-span-8 m-5'>
                    <table className='table-fixed w-full'>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr className="border-2 border-b-gary-600/60">
                                <th className='pl-1 py-2 text-xs'>#</th>
                                <th className='py-2 text-xs text-start'>Company Name</th>
                                <th className='pl-2 py-2 text-xs'>Group Name</th>
                                <th className='pl-2 py-2 text-xs'>Enrolled Members</th>
                                <th className='pl-2 py-2 text-xs'>Total Members</th>
                                <th className='pl-2 py-2 text-xs'>Status</th>
                                <th className='pl-2 py-2 text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>C</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Credit Risk Monitor</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>T</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>TEDC</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>22</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>22</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>F</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Firm Foundation HR</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Direct</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>28</a></td>
                                <td className='py-3 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>32</a></td>
                                <td className='py-3 lg:pl-1'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-1'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default service
