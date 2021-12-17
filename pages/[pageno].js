import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/cartAction"

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:1337/item`)
    const data = await res.json()

    const paths = data.map((data) => {
        return {
            params: {
                pageno: data.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.pageno
    const res = await fetch(`http://localhost:1337/item/${id}`)
    const data = await res.json()
    return {
        props: { data }
    }
}



const pageno = ({ data }) => {
    console.log('in the random page', data)
    const dispatch = useDispatch()
    const View = () => {
        console.log("object",)
        dispatch(addToCart(data))
    }

    return (

        <div>
            <div className='col-md text-center'>
                <img src={data.img} style={{ width: "200px", height: "300px", borderRadius: '20px' }} />
                <h4>Title: {data.title}</h4>
                <h4>Description: {data.desc}</h4>
                <h4>Price: {data.price}</h4>
                <button className='btn btn-primary my-3' onClick={() => View(data)}>Add to cart</button>

            </div>
        </div>
    )
}

export default pageno;
