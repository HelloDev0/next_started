
const rxreport = () => {

    const tArray = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='grid grid-cols-12 m-5'>

                <div className='col-span-12 float-right'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>Export</a>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white m-5 rounded">
                <div className='col-span-12 m-5 bg-white'>
                    <table className='table-auto w-full '>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr>
                                <th className='py-4 text-left pl-3 text-xs'>#</th>
                                <th className='py-4 text-left pl-1 text-xs'>Member Name</th>
                                <th className='py-4 text-left pl-1 text-xs'>Pharmacy</th>
                                <th className='py-4 text-left pl-1 text-xs'>State</th>
                                <th className='py-4 text-left pl-1 text-xs'>Doctor</th>
                                <th className='py-4 text-left pl-1 text-xs'>Script In</th>
                                <th className='py-4 text-left pl-1 text-xs'>Script Out</th>
                                <th className='pr-4 py-4 text-left pl-1 text-xs'>Script ID</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {tArray.map(() => {
                                return <>
                                    <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                        <td className='py-4 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>k</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Kathryn Robinson</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>SEVEN CELLS</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>FL</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>steven powell</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Jul 06 2021 +05:30</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Aug 30 2021 +05:30</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>60e475fb6d532153dc878aca</a></td>
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

export default rxreport
