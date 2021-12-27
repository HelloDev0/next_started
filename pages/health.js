// import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/solid'

const health = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >Health Records  </a>
                        <h3 className="text-xl text-white my-5">Secure Electronic Health Records</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>
                    <div className="my-3 p-2 col-span-4 text-gray-600 text-xs">
                        <p className="font-medium py-2">Welcome to My Health Center!</p>
                        <p className="text-xs">To ensure that you receive the most informed care possible, we encourage you to keep your online health history up to date. Read More..</p>
                        <p className="font-medium pt-2">Viewing records for</p>
                        <p className="py-2 mb-3 text-xs"><span className="text-yellow-600">* </span>Dependent is over 18 and must manage their own records.</p>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">sks war</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">mob jain</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">test1</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">test2</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">normal</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">test test</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">double</button>
                        <button className="border border-[#556ee6] text-[#556ee6] px-3 py-2 mr-4 rounded
                        hover:bg-[#556ee6]/90 hover:text-white">lasst</button>
                    </div>

                    


                    <button id="dropDownButton" data-dropdown-toggle='dropdown'
                        className="col-span-4 bg-white text-gray-600/80 py-2 px-4 rounded "
                    >
                        <div className="relative">
                            <div className="float-left px-2"><i class="fas fa-user border rounded-full px-2 py-1 text-white text-xl bg-[#556ee6] "></i></div>
                            <div className="grid justify-items-start">
                                <p className="text-sm font-bold ">PERSONAL INFORMATION</p>
                                <p className="text-sm">Update Your Personal Information(e.g. height, weight, blood type, etc.)</p>
                            </div>
                            <div className="float-right absolute top-0 right-0"><i class="fas fa-edit text-xl"></i></div>
                        </div>


                    </button>
                    <div id="dropdown" className="col-span-4  hidden px-3 py-6 w-[72.8rem] text-base bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <div className="flex justify-between">
                            <div className="leading-10">
                                <p>Height: 7 ( INCH )</p>
                                <p>Weight: 67 ( LB )</p>
                                <p>Blood Type:</p>
                                <p>Marital Status: Single</p>
                            </div>
                            <div className="leading-10">
                                <p>Smoke: yes</p>
                                <p>Drink: Yes (twice a Week)</p>
                                <p>Exercise: never </p>

                            </div>
                        </div>


                        <button className="text-white bg-[#556ee6]/60 px-3 py-2 m-5 rounded hover:bg-[#556ee6]"
                            id="dropDownButton3" data-dropdown-toggle='dropdown-3'>
                            Edit Personal Information</button>
                        <div id="dropdown-3" className=" hidden px-3 py-10 w-[76.5rem] text-base bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <div className="leading-10">
                                <p>Smoke: yes</p>
                                <p>Drink: Yes (twice a Week)</p>
                                <p>Exercise: never </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}

export default health
