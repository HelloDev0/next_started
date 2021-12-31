import Link from "next/link";
import React from "react";


import dynamic from 'next/dynamic'

const User = "debiprasad"

const Linechart = dynamic(() => import('../components/admin/Linechart'), { ssr: false })

const PieChart = dynamic(() => import("../components/admin/PieChart"), { ssr: false })
let today = new Date().toLocaleDateString()

// console.log('here is the date', today)

export default function Home() {

  return (
    <>
      {!User ? (
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
      ) : (
        <div className="m-5">
          <p className="font-medium mb-2">DASHBOARD</p>
          <div className="grid grid-cols-5">
            <div className="lg:col-span-2 flex flex-row bg-[#cfd5f6] p-5 3 lg:rounded  
            sm:col-span-5 mt-2">
              <div className="sm:basis-2/3 text-blue-600/90 ">
                <p className="text-base font-medium">Welcome Back!</p>
                <p className="text-sm pt-2">Doctegrity</p>
                <ul className="list-inside list-disc">
                  <li className="text-sm pt-4">eHealthcare & Therapy</li>
                </ul>
              </div>
              <div className="sm:basis-1/3">
                <img src="https://app.doctegrity.com/static/media/profile-img.ba4e037e.png" />
              </div>
            </div>
            <div className="lg:col-span-1 ml-5 p-5 bg-white rounded 
            sm:col-span-5 mt-2">
              <p><i class="fas fa-user-friends bg-[#cfd5f6] text-blue-600/90 rounded-full p-2"></i>
                <a className="text-sm font-medium ml-5">Groups</a></p>
              <p className="text-2xl font-medium mt-5 text-gary-700/90">48</p>
            </div>
            <div className="lg:col-span-1  ml-5 p-5 bg-white rounded
            sm:col-span-5 mt-2 ">
              <p><i class="fas fa-city bg-[#cfd5f6] text-blue-600/90 rounded-full p-2"></i>
                <a className="text-sm font-medium ml-5">Companies</a></p>
              <p className="text-2xl font-medium mt-5 text-gary-700/90">532</p>
            </div>
            <div className="lg:col-span-1 ml-5 p-5 bg-white rounded 
            sm:col-span-5 mt-2 ">
              <p><i class="fas fa-user-friends bg-[#cfd5f6] text-blue-600/90 rounded-full p-2"></i>
                <a className="text-sm font-medium ml-5">Active Members</a></p>
              <p className="text-2xl font-medium mt-5 text-gary-700/90">8251</p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className=" lg:col-span-2 sm:col-span-3 my-5" id="chart">
              <Linechart />
            </div>
            <div className="lg:col-span-1 sm:col-span-3 my-5 0">
              <PieChart />
            </div>

          </div>
          <div className="flex flex-row">
            <div className="basis-2/3 grid grid-cols-3">
              <div className="col-span-2 my-5 bg-white rounded p-3">
                <p className="text-sm font-medium"><i class="fas fa-envelope bg-[#cfd5f6] p-2 rounded-full mr-2 text-blue-600"></i>
                Send Welcome Email</p>
                <div className="md:flex-row lg:flex gap-5 sm:flex-col">
                  <div className="mt-3">
                    <a><p className="text-sm mt-2">From </p>
                      <input type="date" className="mt-2 rounded p-[5px] text-sm lg:w-40" placeholder={today} /></a>
                  </div>
                  <div className="mt-3">
                    <a><p className="text-sm mt-2">To </p>
                      <input type="date" className="mt-2 rounded p-[5px] text-sm  lg:w-40" placeholder="today" /></a>
                  </div>
                </div>
                <a className="bg-blue-500/80 p-2 4 mt-5 float-right rounded text-white
                hover:font-bold hover:bg-blue-600 text-sm">Send</a>
              </div>
              <div className="col-span my-5 bg-white rounded p-3 ml-5">
                <p className="text-sm font-medium"><i class="fas fa-users bg-[#cfd5f6] p-2 rounded-full mr-2 text-blue-600"></i>Export Members</p>
                <p className="mt-3 text-sm">Email</p>
                <input type="text" className="rounded w-48 mt-2 p-[5px] sm:w-20 md:w-full" />
                <a className="bg-blue-500/80 p-2 4 mt-5 float-right rounded text-white
                hover:font-bold hover:bg-blue-600 text-sm">Extract</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
