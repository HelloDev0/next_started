

const profile = () => {
    return (
        <>
            <div className="max-w-fit ">
                <div className="grid grid-cols-3">
                    <div className="bg-[#556ee5] pl-3 py-5 pr-32 col-span-2">
                        <a class="text-4xl underline underline-offset-8 font-bold text-white" >Account Details </a>
                        <h3 className="text-2xl text-white my-5">Manage Your Account</h3>

                    </div>
                    <div>
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-3">
                        <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                    <div className="col-span-3 mt-3">
                        <a className="text-sm"> To ensure that your consultation experience goes as smoothly as possible, please update your account information periodically.</a>
                        <br/>
                        <button className="border border-[#556ee6] px-2 py-1 mr-4 rounded-md
                        hover:bg-[#556ee6]/90 mt-3">Personal Info</button>
                        <button className="border border-[#556ee6] px-2 py-1 mr-4 rounded-md
                        hover:bg-[#556ee6]/90 mt-3">Dependents</button>
                        <button className="border border-[#556ee6] px-2 py-1 mr-4 rounded-md
                        hover:bg-[#556ee6]/90 mt-3">Pharmacy</button>
                        <button className="border border-[#556ee6] px-2 py-1 mr-4 rounded-md
                        hover:bg-[#556ee6]/90 mt-3">Password Management</button>
                        <br/>
                        <a className="text-2xl py-5">Personal Information</a><br/>
                        <a className="text-sm">Have you moved recently? Changed your telephone number? This is where you can update your personal information. 
                            Be sure to review and confirm that all changes are accurate before hitting "Save".</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default profile
