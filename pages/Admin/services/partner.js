import React from 'react'

const partner = () => {
    return (
        <>
            <div className="grid grid-cols-8">
                <div className="col-span-5 m-5 ">
                <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs sm:ml-0
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='m-5 float-right col-span-3'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Partner</a>
                </div>
            </div>
            <div className="grid grid-cols-8 bg-white m-5">
                <div className='col-span-8 m-5'>
                    <table className='table-fixed w-full'>
                        <thead className='bg-gray-900/10 rounded w-full'>
                            <tr className="border-b border-gary-600/60">
                                <th className='pl-3 py-3 text-left text-xs'>#</th>
                                <th className='py-3 text-left  text-xs '>Partner Name</th>
                                <th className='pl-2 py-3 text-left text-xs'>Company Name</th>
                                <th className='pl-2 py-3 text-left text-xs'>Status</th>
                                <th className='pl-2 py-3 text-left text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>c</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Credit Risk Monitor</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Credit Risk Monitor</a></td>
                                <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-2 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>TEDC</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>TEDC</a></td>
                                <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-2 flex'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-3 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>D</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Zerin</a></td>
                                <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Zerin</a></td>
                                <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-3 lg:pl-2 flex'>
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

export default partner
