import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="max-w-fit p-5 bg-gray-200/20" style={{ fontWeight: 400 }}>
        <div className="grid grid-cols-4 ">
          <div className="bg-[#556ee5] pl-8 pt-8 pr-32 col-span-3 rounded-tl h-40">
            <a class="text-3xl underline underline-offset-8 font-bold text-white" >Welcome Dashboard  </a>
            <h3 className="text-xl text-white my-5">Welcome to your personalized health portal</h3>

          </div>
          <div className="">
            <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className=" h-40 w-full rounded-tr"></img>
          </div>
          <div className="bg-yellow-400 py-2 pl-3 col-span-4 rounded-b">
            <a className="text-sm text-white">In a life threatening emergency please call <span className="bg-red-600/70 rounded-3xl p-2 text-white"> 911 </span></a>
          </div>

        </div>
        <div className="grid grid-cols-4 p-6 my-3 mt-5 border rounded text-gray-600 bg-white">
          <div className="col-span-2">
            <p className="text-md text-blue-600 p-2">No Upcoming Appointments</p>
          </div>
          <div className="col-span-2">
            <button className="text-4xl float-right pr-5 hover:text-blue-600"><i class="far fa-calendar-alt"></i></button>
          </div>

        </div>
        <div className="grid grid-cols-4 pt-6">
          <button className="col-span text-blue-600/70 hover:text-blue-600 bg-white border rounded py-3"><a className="text-5xl "><i class="fas fa-phone-alt"></i>
          </a><p className=" py-3 text-md">Speak to a Doctor</p></button>
          <button className="col-span text-blue-600/70 hover:text-blue-600 bg-white border rounded mx-2 py-3"><a className="text-5xl "><i class="fas fa-user-md"></i>
          </a><p className=" py-3 text-md">Speak to a Therapist</p></button>
          <button className="col-span text-blue-600/70 hover:text-blue-600 bg-white border rounded mx-2 py-3"><a className="text-5xl "><i class="fas fa-poll"></i>
          </a><p className=" py-3 text-md">Health Profile</p></button>
          <button className="col-span text-blue-600/70 hover:text-blue-600 bg-white border rounded ml-2 py-3"><a className="text-5xl"><i class="fas fa-users-cog"></i>
          </a><p className=" py-3 text-md">Add a Family Member</p></button>

        </div>

      </div>
    </>
  )
}
