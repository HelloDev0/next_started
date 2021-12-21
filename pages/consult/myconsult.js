

const myconsult = () => {
    return (
        <>
            <div className="max-w-fit border rounded-md">
                <div className="grid grid-cols-3 rounded">
                    <div className="bg-[#556ee5] pl-4 py-5 col-span-2 ">
                        <a class="text-4xl underline underline-offset-8 font-bold text-white" >My Consultations </a>
                        <h3 className="text-2xl text-white my-5">Manage Your Consultations</h3>

                    </div>
                    <div>
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-3">
                        <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default myconsult
