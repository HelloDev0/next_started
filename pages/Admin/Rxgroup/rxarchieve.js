import { Menu } from "@headlessui/react"

const rxarchieve = () => {

    const tArray = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <div className='grid grid-cols-4 m-5'>
                <div className='col-span-2'>
                    <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='col-span-1'>
                    <Menu as="div" className=''>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <p className='border border-gray-400 rounded py-2 pr-48 pl-2 bg-white   '>All <i class="fas fa-chevron-down"></i></p>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Brands
                            </Menu.Item >
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                partners
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <div className='col-span-1 '>
                    <Menu as="div" className=''>
                        <Menu.Button className="text-left ml-7 text-sm text-gray-600/80 hover:text-blue-500/100">
                            <p className='border border-gray-400 rounded py-2 pr-48 pl-2 bg-white   '>All <i class="fas fa-chevron-down"></i></p>
                        </Menu.Button>
                        <Menu.Items className='text-sm ml-14 my-2 text-gray-600/80 '>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Services
                            </Menu.Item>
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                Brands
                            </Menu.Item >
                            <Menu.Item as="div" className="hover:text-blue-500/100 my-2">
                                partners
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
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
                                <th className='py-4 text-left pl-1 text-xs'>Submission Date</th>
                                <th className='py-4 text-left pl-1 text-xs'>RxID</th>
                                <th className='py-4 text-left pl-1 text-xs'>Archive</th>
                                <th className='pr-4 py-4 text-left pl-1 text-xs'>Script ID</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {tArray.map(() => {
                                return <>
                                    <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                        <td className='py-4 lg:pl-3'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>k</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>Robert Sulprizio</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>SEVEN CELLS</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>FL</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>25 Jun 2021, 8:17:45 pm</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-xs font-medium'>60d5ec91e5bb40492329330d</a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-gray-700 text-sm font-medium'><i class="fas fa-file-download"></i></a></td>
                                        <td className='py-4 lg:pl-1'><a className='text-yellow-700/60 text-xs font-medium bg-yellow-400/20 px-1 rounded hover:bg-yellow-400/60'>pending</a></td>
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

export default rxarchieve
