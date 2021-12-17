import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Error = () => {
    const router = useRouter()
    const gotoHome = () => {
        router.push('/')
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },6000)
        
    },[])

    return (
        <div className="text-center">
            <h2 className="diplay-1 ">404</h2>
            <h3>you are entered a wrong web address</h3>
            <button className='btn btn-secondary' onClick={gotoHome}>click to go homepage</button>

        </div>
    )
}

export default Error
