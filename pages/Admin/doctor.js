import React from 'react'

const doctor = () => {
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
                    hover:bg-blue-700'>+ Create Doctor</a>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white m-5">
                <div className='col-span-12 m-5 bg-white'>
                    <table className='table-auto w-full'>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr>
                                <th className='pl-2 py-3  text-left text-xs'>#</th>
                                <th className='pl-2 py-3  text-left text-xs '>First Name</th>
                                <th className='pl-2 py-3  text-left text-xs'>Last Name</th>
                                <th className='pl-2 py-3  text-left text-xs'>Email</th>
                                <th className='pl-2 py-3  text-left text-xs'>Phone</th>
                                <th className='pl-2 py-3  text-left text-xs'>Status</th>
                                <th className='pl-2 py-3  text-left text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>k</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Katina</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Allen</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>sassytrail@aol.com</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>+15612614024</a></td>
                                <td className='py-4 lg:pl-3'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>c</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Chris</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Springer</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>chrisspringer@doctegrity.com</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>+15212365478</a></td>
                                <td className='py-4 lg:pl-3'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                <td className='py-4 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>j</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Justin</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>Rabinowitz</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>justinrobin@gmail.com</a></td>
                                <td className='py-4 lg:pl-3'><a className='text-gray-700 text-xs font-medium'>+13123510817</a></td>
                                <td className='py-4 lg:pl-3'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4'>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default doctor
