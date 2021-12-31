import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"

const partner = () => {
    // const tArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const [listItems, setListItems] = useState(Array.from(Array(1).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }
    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(1).keys(), n => n + prevState.length + 1)]));
            setIsFetching(false);
            console.log("object", setListItems)
        }, 2000);
    }

    // const [post, setPost] = useState(tArray);
    // const getMorePost=async()=>{

    // }
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
                    <table className='table-auto w-full'>
                        <thead className='bg-gray-900/10 rounded w-full'>
                            <tr className="border-b border-gary-600/60">
                                <th className='pl-3 py-3 text-left text-xs'>#</th>
                                <th className='py-3 text-left  text-xs '>Partner Name</th>
                                <th className='pl-2 py-3 text-left text-xs'>Company Name</th>
                                <th className='pl-2 py-3 text-left text-xs'>Status</th>
                                <th className='pl-2 py-3 text-left text-xs'>Action</th>
                            </tr>
                        </thead>

                        {/* <InfiniteScroll className=''
                       dataLength={post.length}
                       next={getMorePost}
                        hasMore={hasMore}
                        loader={<h3>Loading...</h3>}
                        endMessage={
                            <center><p className='text-red-800'>you have seen all posts</p></center>
                        }
                     > */}


                        <tbody className=''>
                            {listItems.map(() => {
                                return <>
                                    <tr className='border-b border-b-gary-600 hover:bg-blue-700/20 border-l border-l-[#556ee6]'>
                                        <td className='py-3 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>C</a></td>
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
                                        <td className='py-3 lg:pl-2'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem] '>Z</a></td>
                                        <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Zerin</a></td>
                                        <td className='py-3 lg:pl-2'><a className='text-gray-700 text-sm font-medium'>Zerin</a></td>
                                        <td className='py-3 lg:pl-2'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                        <td className='py-3 lg:pl-2 flex'>
                                            <i class="fas fa-edit text-gray-700/70"></i>
                                            <i class="fas fa-check text-[#34c38f] ml-4"></i></td>
                                    </tr>
                                </>
                            })}

                            {/* {loading ? <div className="text-center">loading data ...</div> : ""} */}
                            {/* {noData ? <div className="text-center">no data anymore ...</div> : ""} */}

                        </tbody>
                        {isFetching && <center className='flex-row'><p className='text-sm font-medium text-blue-500/90 '> <img src='https://i.pinimg.com/originals/fa/87/77/fa87774590186b287a5338d7c87afc0c.gif' className='h-12'/> Loading...</p></center>}

                        {/* </InfiniteScroll> */}
                    </table>

                </div>
            </div>
        </>
    )
}

export default partner
