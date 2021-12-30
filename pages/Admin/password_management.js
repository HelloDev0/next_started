import React from 'react'

const password_management = () => {
    return (
        <>
            <div className='grid grid-cols-12 m-5'>
                <div className="col-span-12 bg-white rounded p-5 leading-8">
                    <p className="font-medium text-xl">Password Management</p>
                    <p className="text-sm mt-5">Here you can change your Account's password.</p>
                    <p className="text-sm mt-5">Email</p>
                    <input className="border border-gray-400 mt-3 rounded text-sm py-2 px-1 lg:w-1/2 sm:w-full" placeholder="Email" />
                    <p className="text-sm mt-5">New Password</p>
                    <input className="border border-gray-400 mt-3 rounded text-sm py-2 px-1 lg:w-1/2 sm:w-full" placeholder="New Password" /><br />
                    <button className="text-white text-sm bg-[#556ee6]/90 py-2 px-8 rounded mt-4 
                    hover:bg-[#556ee6]">Save</button>
                </div>
            </div>
        </>
    )
}

export default password_management
