
const profile = () => {
    return (
        <>
            <div className="grid grid-cols-12 m-5  " style={{fontWeight:400}}>
                <div className="col-span-12 flex bg-white rounded p-5 w-full">
                    <img src="https://app.doctegrity.com/static/media/default-avatar.ea5eeaeb.svg" 
                    alt="profile" className="cursor-pointer h-16 border-4 border-gray-400/40 p-1 rounded-full"/>
                    <div className="pt-1 pl-4 text-gray-600/70">
                        <p className="text-gray-600 font-medium">Sudeep Sahoo</p>
                        <p className="text-sm">sudeep.admin@doctegrity.com</p>
                        <p className="text-sm">Id: #60c989a012e6d2186f006f72</p>
                    </div>
                    <div className="text-xs cursor-pointer absolute right-12">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="col-span-12 bg-white rounded mt-5 p-5 leading-8">
                    <p className="font-medium text-xl">Password Management</p>
                    <p className="text-sm mt-5">Here you can change your Account's password.</p>
                    <p className="text-sm mt-5">Old Password</p>
                    <input className="border border-gray-400 mt-3 rounded text-sm py-2 px-1 lg:w-1/2 sm:w-full md:w-full" placeholder="Old Password"/>
                    <p className="text-sm mt-5">New Password</p>
                    <input className="border border-gray-400 mt-3 rounded text-sm py-2 px-1 lg:w-1/2 sm:w-full md:w-full" placeholder="New Password"/>
                    <p className="text-sm mt-5">Confirm Password</p>
                    <input className="border border-gray-400 mt-3 rounded text-sm py-2 px-1 lg:w-1/2 sm:w-full md:w-full" placeholder="Confirm Password"/><br/>
                    <button className="text-white text-sm bg-[#556ee6]/90 py-2 px-5 rounded mt-4 
                    hover:bg-[#556ee6]">Save</button>
                </div>
           </div>
           {/* <div style={{backgroundImage:`URL(${"https://app.doctegrity.com/static/media/logo-dark.0ce46e93.svg"})`}}>sbjvgfkbkdsbvkabkbdfvkabbk</div> */}
        </>
    )
}

export default profile
