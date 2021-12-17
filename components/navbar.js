import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hub from '../public/images/hub.png'
import { addToSearch, cartReset, userLogout } from "../redux/actions/cartAction";

export default function Navbar() {
    const route = useRouter()
    const dispatch = useDispatch()
    const dataIncart = useSelector((state) => state.cart.cartItems)
    const userDetail = useSelector((state) => state.cart.user[0])
    console.log('userdata from store', dataIncart)

    useEffect(() => {
        const user = localStorage.getItem('userID')
        // setUser(user)
    }, [])

    // console.log("checking in ", user)
    function logOut() {
        localStorage.removeItem('userID')
        localStorage.removeItem('useridforDB')
        dispatch(userLogout())
    }
    const [search, setSearch] = useState({
        title: ""
    })
    // setUser(e.target.value)
    const handleChange = e => {
        const { name, value } = e.target
        setSearch({
            ...search,
            [name]: value
        })
    }

    const dataSend = search.title
    const [data, setData] = useState()

    const callSearch = async () => {
        await axios.get(`http://localhost:1337/search/?q=${dataSend}`)
                .then((res) => {
                    console.log('just chcekl',res.data)
                    setData(res.data)
                })
        dispatch(addToSearch(data))
    }

    const clearSearch=()=>{
        dispatch(cartReset())
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link href={'/'}>
                        <a className="navbar-brand h1" href=""><Image src={hub} width="130px" height="50px"></Image></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <h4 className='text-success px-4'>Welcome {userDetail}<i className="far fa-smile text-success"></i></h4>
                        </ul>

                        <div className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" 
                                name="title" value={search.title} onChange={handleChange}
                            ></input>
                            <button className="btn btn-outline-success mx-2"
                            onClick={callSearch}
                            >Search</button>
                            <button className='btn btn-outline-danger' 
                            onClick={clearSearch}><i className="far fa-times-circle"></i>clear</button>

                            <button className="btn btn_cart" onClick={() => { route.push('/cart') }}>
                                <i class="fas fa-shopping-cart h3 mx-5">Cart<span className='cart_number'>{dataIncart.length}</span></i>
                            </button>
                            {!userDetail ? (
                                <div className="d-flex">
                                    <button className="btn btn-outline-warning my-2 mx-2 my-sm-0">
                                        <Link href='/user/register'><a className="text-decoration-none text-dark">Register</a></Link></button>
                                    <button className="btn btn-outline-success my-2 my-sm-0" >
                                        <Link href='/user/login' ><a className="text-decoration-none text-dark">Login</a></Link></button>
                                </div>
                            ) : (
                                <button className="btn btn-outline-danger" onClick={logOut}>Logout</button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )
}