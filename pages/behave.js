

const behave = () => {
    return (
        <>
            <div className="max-w-fit ">
                <div className="grid grid-cols-3">
                    <div className="bg-[#556ee5] pl-3 py-5 pr-32 col-span-2">
                        <a class="text-4xl underline underline-offset-8 font-bold text-white" >Behavioral Health </a>
                        <h3 className="text-2xl text-white my-5">We are here to help</h3>

                    </div>
                    <div>
                        <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
                    </div>
                    <div className="bg-yellow-400 py-2 pl-3 col-span-3">
                        <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
                    </div>

                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-2 mt-3 px-3">
                        <a className="text-l text-blue-500 my-3">TELETHERAPY BENEFIT</a>
                        <p className="text-sm pt-1">Most people experience some personal or family distress in the course of their lives.
                            Professional assistance helps to ensure successful management of personal challenges. Teletherapy Benefit
                            is a convenient first step in getting such support.</p>
                        <img className="pt-3" src="https://app.doctegrity.com/static/media/care-wide.2ae74d7a.png" />
                        <p className="text-sm pt-3">
                            Teletherapy Benefit provides confidential, unlimited telephonic consultation, counseling and referral services for members including:
                        </p>
                        <ul className="list-outside list-disc text-sm ml-3 my-3">
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
                    <div className="col-span mx-4 mt-3">
                        <p className="text-l text-bold text-blue-500 my-3 pl-2 border-1 border-y-gray-400/40">COMMON REASON</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">STRESS AND ANXIETY</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">COVID SUPPORT</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">SMOKING CESSATION</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">MAJOR ILLNESS</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">DEPRESSION</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">WORKPLACE ISSUE</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">SUBSTANCE ABUSE</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">PARENTING / ELDERLY CARE</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">DEATH OF LOVED ONE</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">FINANCIAL AND LEGAL CONSULTS</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">RELATIONSHIP ISSUES</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">OTHER REASONS OF CONCERN</p>
                        <p className="text-sm text-gray-600 pl-2 py-2 border border-1 border-y-gray-400/20">PET CARE RESOURCES</p>
                    </div>
                    <div className="col-span-2 mt-3 ">
                        <p className="text-l text-blue-500 my-3">LET'S GET STARTED</p>
                        <p className="text-gray-500">Hi there. Is this a life-threatening emergency?</p>
                        <button className="text-white bg-[#556ee6]/70 py-2 px-2 border rounded-md my-2
                 hover:bg-[#556ee6]">Yes</button>
                        <button className="text-white bg-[#556ee6]/70 py-2 px-2 border rounded-md my-2
                 hover:bg-[#556ee6]">No</button><br/>
                        <label>What state are you currently in?</label><br/>
                        <input type='text'></input><br/>
                        <label>Ok. What is the reason for your call today?</label><br/>
                        <input type='select'></input><br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default behave

