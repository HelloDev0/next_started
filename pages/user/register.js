import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'

const register = () => {
    const route=useRouter()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = async(req, res) => {
        const { name, email, password } = user
        console.log(user)
        if (name && email && password) {
            await axios.post("http://localhost:1337/user", user)
                .then(res => {
                    console.warn('Registered Successfully')
                    route.push('/user/login')
                })
        }else{
            alert("invalid cerdential!!")
        }
    }

    return (
        <div className="container-fluid rounded-3 py-5" style={{ background: "gray", width: "50%", color: "white" }}>
            <div className="row">
                <div className="col-md-5 mx-auto" >

                    <h3>Registration Page</h3>
                    <div>
                        <div class="mb-3">
                            <label for="exampleInputname" class="form-label">User Name</label>
                            <input type="text" class="form-control"
                             name='name' value={user.name}
                             onChange={handleChange}></input>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" 
                            name='email' value={user.email}
                            onChange={handleChange}></input>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" 
                            name='password' value={user.password}
                            onChange={handleChange}></input>
                        </div>

                        <button type="submit" class="btn btn-outline-success text-white"
                         onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register
