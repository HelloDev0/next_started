
const pharmacies = () => {
    const tArray = [1, 2, 3, 4, 5, 6, 7];
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
                    hover:bg-blue-700'>+ Create RxPharmacies</a>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white m-5 rounded">
                <div className='col-span-12 m-5 bg-white'>
                    <table className='table-auto w-full '>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr>
                                <th className='py-4 text-left pl-3 text-xs'>#</th>
                                <th className='py-4 text-left pl-1 text-xs'>Pharmacy Name</th>
                                <th className='py-4 text-left pl-1 text-xs'>Pharmacy Email</th>
                                <th className='py-4 text-left pl-1 text-xs'>Status</th>
                                <th className='pr-4 py-4 text-left pl-1 text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {tArray.map(() => {
                                return <>
                                    <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                        <td className='py-4 lg:pl-3 md:'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>T</a></td>
                                        <td className='py-4 lg:pl-1 md:'><a className='text-gray-700 text-xs font-medium'>Test Apollo Pharmacy</a></td>
                                        <td className='py-4 lg:pl-1 md:'><a className='text-gray-700 text-xs font-medium'>apollo@gmail.com</a></td>
                                        <td className='py-4 lg:pl-1 md:'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                        <td className='py-4'>
                                            <i class="fas fa-edit text-gray-700/70"></i>
                                            <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                                    </tr>
                                </>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default pharmacies
