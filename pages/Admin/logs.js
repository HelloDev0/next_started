const logs = () => {
    return (
        <>
            <div className="grid grid-cols-6">
                <div className="col-span-6 m-5">
                    <p className="text-xl">Event Logs:</p>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white m-5 rounded">
                <div className='col-span-12 bg-white'>
                    <table className='table-auto w-full '>
                        <thead className='bg-gray-900/10 rounded'>
                            <tr>
                                <th className='py-4 text-left pl-3 text-sm'>Created At</th>
                                <th className='py-4 text-left pl-1 text-sm'>Object Type</th>
                                <th className='py-4 text-left pl-1 text-sm'>Event Name</th>
                                <th className='py-4 text-left pl-1 text-sm'>Channel Name</th>
                                <th className='py-4 text-left pl-1 text-sm'>Reserved At</th>
                                <th className='py-4 text-left pl-1 text-sm'>Reserved By</th>
                                <th className='py-4 text-left pl-1 text-sm'>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}

export default logs
