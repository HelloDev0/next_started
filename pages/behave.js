

const behave = () => {
    return (
        <>
            <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
                <div className="grid grid-cols-4 ">
                    <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
                        <a class="text-3xl underline underline-offset-8 font-bold text-white" >Behavioral Health </a>
                        <h3 className="text-xl text-white my-5">We are here to help</h3>

                    </div>
                    <div className="">
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
                        <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                </div>
                <div className="grid grid-cols-5 text-gray-600 ">
                    <div className="col-span-2 mt-5 px-3 border rounded bg-white">
                        <a className="text-md text-blue-500 my-3 pt-2">TELETHERAPY BENEFIT</a>
                        <p className="text-xs pt-1 font-medium" >Most people experience some personal or family distress in the course of their lives.
                            Professional assistance helps to ensure successful management of personal challenges. Teletherapy Benefit
                            is a convenient first step in getting such support.</p>
                        <img className="pt-3" src="https://app.doctegrity.com/static/media/care-wide.2ae74d7a.png" />
                        <p className="text-xs pt-3 font-medium" >
                            Teletherapy Benefit provides confidential, unlimited telephonic consultation, counseling and referral services for members including:
                        </p>
                        <ul className="list-outside list-disc text-xs ml-3 my-3">
                            <li> 24/7 availability to Licenced Mental Health Therapists</li>
                            <li> No co-pay or consult fee</li>
                            <li> Immediate crisis support</li>
                            <li> Comprehensive problem assessment and resolution</li>
                            <li> Supportive counseling and subsequent sessions</li>
                            <li> Ancillary Benefits: Financial, Legal, Advocacy and more</li>
                            <li> 100% follow up with original counselor</li>
                            <li> Custom referral (if needed) to medical, behavioral health plans or local community resources</li>
                        </ul>
                    </div>
                    <div className="col-span mx-4 mt-5 border rounded bg-white p-4">
                        <p className="text-l text-bold text-blue-500 my-3 pl-2 py-3 border-b-2 border-gray-400/20">COMMON REASON</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">STRESS AND ANXIETY</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">COVID SUPPORT</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">SMOKING CESSATION</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">MAJOR ILLNESS</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">DEPRESSION</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">WORKPLACE ISSUE</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">SUBSTANCE ABUSE</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">PARENTING / ELDERLY CARE</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">DEATH OF LOVED ONE</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">FINANCIAL AND LEGAL CONSULTS</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">RELATIONSHIP ISSUES</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">OTHER REASONS OF CONCERN</p>
                        <p className="text-xs text-gray-600 py-3 border-b-2 border-gray-400/20 ">PET CARE RESOURCES</p>
                    </div>
                    <div className="col-span-2 mt-5 border rounded bg-white p-6 ">
                        <p className="text-l text-blue-500 my-3">LET'S GET STARTED</p>
                        <p className="text-gray-500">Hi there. Is this a life-threatening emergency?</p>
                        <button className="border border-[#556ee6] text-[#556ee6] rounded py-1 px-2 my-2 mx-2
                 hover:bg-[#556ee6] hover:text-white">Yes</button>
                        <button className="border border-[#556ee6] text-[#556ee6] rounded py-1 px-2 my-2 mx-2
                 hover:bg-[#556ee6] hover:text-white">No</button><br/>
                        <label className="text-xs">What state are you currently in?</label><br/>
                        <input type='text' className="border rounded border-gray-400/20 my-3"></input><br/>
                        <label className="text-xs">Ok. What is the reason for your call today?</label><br/>
                        <input type='text' className="border rounded border-gray-400/20 my-3"></input><br/>
                        <p className="text-xs">Click to call our Counselor Service</p>
                        <button className="border border-[#556ee6] text-sm text-[#556ee6] rounded py-2 px-2 my-3 
                 hover:bg-[#556ee6] hover:text-white"><i class="fas fa-phone"></i> Call Counselor</button>
                        <p className="text-xs">or dial at your convenience</p>
                        <a className="text-xs text-[#556ee6]" href="">1-844-368-2088</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default behave

