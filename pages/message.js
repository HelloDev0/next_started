
const message = () => {
    return (
        <>
            <div className="max-w-fit ">
                <div className="grid grid-cols-3">
                    <div className="bg-[#556ee5] pl-3 py-5 pr-32 col-span-2">
                        <a class="text-4xl underline underline-offset-8 font-bold text-white" >Message A Doctor  </a>
                        <h3 className="text-2xl text-white my-5">Secure, Confidential Advice</h3>

                    </div>
                    <div>
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-3">
                        <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                </div>
                <div className="grid grid-cols-2 mt-2">
                    <div className="col-span">
                        <button className="text-white bg-[#556ee6]/70 py-2 px-1 border rounded-md my-2
                 hover:bg-[#556ee6]">+ Compose a Message</button>
                    </div>
                    <div className="col-span mt-24 text-center">
                        <a className="text-6xl text-blue-500/80 pt-3"><i class="far fa-comments"></i></a>
                        <p className="text-3xl">Start Discussion</p>
                        <p className="text-md my-2">Secure & Confidential . Upload test results or images</p>
                        <button className="text-white bg-[#556ee6]/70 py-2 px-1 border rounded-md my-2
                 hover:bg-[#556ee6]">+ Compose a Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default message
