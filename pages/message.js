
const message = () => {
    return (
        <>

            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >Message A Doctor </a>
                        <h3 className="text-xl text-white my-5">Secure, Confidential Advice</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>


                </div>
                <div className="grid grid-cols-2 mt-2 text-gray-600">
                    <div className="col-span">
                        <button className="text-white bg-[#556ee6]/70 py-2 px-1 border rounded-md my-2
                 hover:bg-[#556ee6]">+ Compose a Message</button>
                    </div>
                    <div className="col-span mt-24 text-center bg-white py-10 border rounded">
                        <a className="text-6xl text-blue-500/80 pt-3"><i class="far fa-comments"></i></a>
                        <p className="text-2xl font-bold">Start Discussion</p>
                        <p className="text-sm my-2">Secure & Confidential . Upload test results or images</p>
                        <button className="text-white bg-[#556ee6]/70 py-2 px-1 border rounded-md my-2
                 hover:bg-[#556ee6]">+ Compose a Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default message
