

const schedule = () => {
    return (
        <>
            <div className="max-w-fit border rounded-md">
                <div className="grid grid-cols-3 rounded">
                    <div className="bg-[#556ee5] pl-4 py-5 col-span-2 ">
                        <a class="text-4xl underline underline-offset-8 font-bold text-white" >Schedule Center</a>
                        <h3 className="text-2xl text-white my-5">Schedule a Consultation</h3>

                    </div>
                    <div>
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-3">
                        <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                    <div className="col-span bg-gray-500/20 m-4 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="fas fa-laptop-medical"></i></a>
                        <p className="my-3">By Video Call</p>
                    </div>
                    <div className="col-span bg-gray-500/20 m-4 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="fas fa-headset"></i></a>
                        <p className="my-3">By phone Call</p>
                    </div>
                    <div className="col-span bg-gray-500/20 m-4 rounded p-3 text-center">
                        <a className="text-8xl text-gray-600/80 hover:text-[#556ee5]"><i class="far fa-comments"></i></a>
                        <p className="my-3">Message a doctor</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default schedule
