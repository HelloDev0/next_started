
import axios from "axios"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Title from "../components/Title"
import { cartEmpty, removeFromCart } from "../redux/actions/cartAction"


function cart() {
    const dataFromStore = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const Router=useRouter()
    console.log('data from store', dataFromStore)

    const Remove = (id) => {
        console.log('bkbkwbkbkkbbkkbkkkbkk', id)
        dispatch(removeFromCart(id))

    }
    let total = 0
    for (let i = 0; i < dataFromStore.length; i++) {
        total = total + parseInt(dataFromStore[i].price)

    }

    const checkOut = () => {
        dataFromStore.map(async (product) => {
            const { id, title, desc, img, price } = product
            
            const data = {
                title: product.title,
                desc: product.des,
                price: product.price,
                img: product.img,
                userId: localStorage.getItem('useridforDB')
            }
            console.log("data in the cartScreen", data)
            await axios.post(`http://localhost:1337/cart`, data)
                .then((res) => {
                    console.log('just chcekl', res.data)

                })

        })
        dispatch(cartEmpty())
        Router.push('/')
    }

    return (

        < >
            <Title title="Cart" />
            {/* <h1>Hello netTantra</h1> */}
            <div className="container">
                <div className='row'>
                    <div className="col-md-8">
                        {dataFromStore.map((p, id) => {
                            return (
                                <div key={id} className='col-md-4 text-center'>
                                    <img src={p.img} style={{ width: "200px", height: "300px", borderRadius: '20px' }} />
                                    <h4>Title: {p.title}</h4>
                                    <h4>Description: {p.desc}</h4>
                                    <h4>Price: Rs.{p.price}.00</h4>
                                    <button className='btn btn-outline-danger my-3' onClick={() => Remove(p.id)}>Remove from cart</button>

                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-4 my-5">
                        <h3>Total Price: Rs.{total}.00</h3>
                        <button className="btn btn-outline-secondary"
                        onClick={checkOut}>Proceed to CheckOut</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default cart
