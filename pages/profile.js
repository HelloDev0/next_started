

const profile = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >Account Details </a>
                        <h3 className="text-xl text-white my-5">Manage Your Account</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                    <div className="col-span-4 mt-3 text-gray-600 font-medium" style={{fontSize:"14px"}}>
                        <a className="text-xs"> To ensure that your consultation experience goes as smoothly as possible, please update your account information periodically.</a>
                        <br/>
                        <div className="gap-x-4">
                        <button className="border border-[#556ee6] text-xs text-[#556ee6] px-2 py-2 mr-5 rounded-md
                        hover:bg-[#556ee6]/90 hover:text-white mt-3">Personal Info</button>
                        <button className="border border-[#556ee6] text-xs text-[#556ee6] px-2 py-2 mr-5 rounded-md
                        hover:bg-[#556ee6]/90 hover:text-white mt-3">Dependents</button>
                        <button className="border border-[#556ee6] text-xs text-[#556ee6] px-2 py-2 mr-5 rounded-md
                        hover:bg-[#556ee6]/90 hover:text-white mt-3">Pharmacy</button>
                        <button className="border border-[#556ee6] text-xs text-[#556ee6] px-2 py-2 mr-5 rounded-md
                        hover:bg-[#556ee6]/90 hover:text-white mt-3">Password Management</button>
                        </div>
                        <br/>
                        <a className="text-xl py-5">Personal Information</a><br/>
                        <a className="text-xs">Have you moved recently? Changed your telephone number? This is where you can update your personal information. 
                            Be sure to review and confirm that all changes are accurate before hitting "Save".</a>
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default profile
