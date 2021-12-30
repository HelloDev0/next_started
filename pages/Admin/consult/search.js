
const search = () => {
    return (
        <>
            <div className='grid grid-cols-6'>
                <div className='col-span-6 float-left m-5'>
                    <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
            </div>
            <div className="grid grid-cols-8 bg-white m-5">
                    <div className='col-span-8 m-5'>
                        <table className='table-auto w-full'>
                            <thead className='bg-gray-900/10 rounded w-full'>
                                <tr className="border border-b-gray-600/10">
                                    <th className='pl-3 py-3 text-xs text-left'>#</th>
                                    <th className='py-3 text-xs text-left'>Questions</th>
                                
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1.1rem] '>i</a></td>
                                    <td className='py-3 text-left'><a className='text-blue-700 text-sm font-medium'>
                                        I think I have Pink Eye and need a prescription.</a></td>
                                    
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1.1rem] '>i</a></td>
                                    <td className='py-3 text-left'><a className='text-blue-700 text-sm font-medium'>
                                        testing the darta</a></td>
                                    
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1.1rem] '>i</a></td>
                                    <td className='py-3 text-left'><a className='text-blue-700 text-sm font-medium'>
                                        Pupose not given</a></td>
                                    
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1.1rem] '>i</a></td>
                                    <td className='py-3 text-left'><a className='text-blue-700 text-sm font-medium'>
                                        nothing</a></td>
                                    
                                </tr>
                                <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                    <td className='py-4 pl-1'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1.1rem] '>i</a></td>
                                    <td className='py-3 text-left'><a className='text-blue-700 text-sm font-medium'>
                                        test###</a></td>
                                    
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    )
}

export default search
