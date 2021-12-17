import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../../redux/actions/cartAction"


const login = () => {
    const dispatch=useDispatch()
    const route=useRouter()
    const[user,setUser]=useState({
        email:'',
        password:''
    })
    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login=async(e)=>{
        e.preventDefault();
        const {email,password}=user
        const response=await axios.post("http://localhost:1337/login",user)
        console.log(response.data)
        localStorage.setItem('userID',response.data.name)
        localStorage.setItem("useridforDB",response.data.id)
        const User=localStorage.getItem('userID')
        console.log("logged in!!")
        route.push('/')
        dispatch(userLogin(User))
    }


    return (
        <div className="container-fluid rounded-3 py-5" style={{background:"gray",width:"50%",color:"white"}}>
            <div className="row">
                <div className="col-md-5 mx-auto" >

                    <h3>Login to view Library</h3>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" 
                            name="email" value={useRouter.email}
                            onChange={handleChange}></input>
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" 
                            name="password" value={useRouter.password}
                            onChange={handleChange}
                            ></input>
                        </div>
                        
                        <button type="submit" class="btn btn-outline-primary text-white"
                        onClick={login}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
