import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="max-w-fit border rounded-md">
        <div className="grid grid-cols-3 rounded">
          <div className="bg-[#556ee5] pl-4 py-5 col-span-2 ">
            <a class="text-4xl underline underline-offset-8 font-bold text-white" >Welcome Dashboard  </a>
            <h3 className="text-2xl text-white my-5">Welcome to your personalized health portal</h3>

          </div>
          <div>
            <img src="https://app.doctegrity.com/static/media/dct-family-banner.b3323956.jpg" className="w-full h-full"></img>
          </div>
          <div className="bg-yellow-400 py-2 pl-3 col-span-3">
            <a >In a life threatening emergency please call <span className="bg-red-600/100 rounded-3xl p-2 text-white"> 911 </span></a>
          </div>

        </div>
        <div className="grid grid-cols-4 pt-6">
          <div className="col-span-2">
            <p className="text-md text-blue-600 p-2">No Upcoming Appointments</p>
          </div>
          <div className="col-span-2">
            <button className="text-4xl float-right pr-5 hover:text-blue-600"><i class="far fa-calendar-alt"></i></button>
          </div>

        </div>
        <div className="grid grid-cols-4 pt-8">
          <button className="col-span pl-3 py-3 text-blue-600/70 hover:text-blue-600"><a  className="text-5xl "><i class="fas fa-phone-alt"></i>
          </a><p className=" py-3 text-md">Speak to a Doctor</p></button>
          <button className="col-span pl-3 py-3 text-blue-600/70 hover:text-blue-600"><a  className="text-5xl "><i class="fas fa-user-md"></i>
          </a><p className=" py-3 text-md">Speak to a Therapist</p></button>
          <button className="col-span pl-3 py-3 text-blue-600/70 hover:text-blue-600"><a  className="text-5xl "><i class="fas fa-poll"></i>
          </a><p className=" py-3 text-md">Health Profile</p></button>
          <button className="col-span pl-3 py-3 text-blue-600/70 hover:text-blue-600"><a  className="text-5xl"><i class="fas fa-users-cog"></i>
          </a><p className=" py-3 text-md">Add a Family Member</p></button>

        </div>

      </div>
    </>
  )
}
