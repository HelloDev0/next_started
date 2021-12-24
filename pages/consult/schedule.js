

const schedule = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >Schedule Center </a>
                        <h3 className="text-xl text-white my-5">Schedule a Consultation</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 mx-5 my-5 text-center">
                            <a className="text-base text-gray-700">What type of <span className="font-bold">diagonstic consultation </span>do you need?</a>
                        </div>

                    <div className="col-span bg-white mt-5 mr-3 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="fas fa-laptop-medical"></i></a>
                        <p className="my-3 text-sm text-gray-700">By Video Call</p>
                    </div>
                    <div className="col-span bg-white mt-5 mx-3 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="fas fa-headset"></i></a>
                        <p className="my-3 text-sm text-gray-700">By phone Call</p>
                    </div>
                    <div className="col-span bg-white mt-5 ml-3 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="far fa-comments"></i></a>
                        <p className="my-3 text-sm text-gray-700">Message a doctor</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default schedule
