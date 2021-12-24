

const myconsult = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >My Consultations </a>
                        <h3 className="text-xl text-white my-5">Manage Your Consultations</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default myconsult
