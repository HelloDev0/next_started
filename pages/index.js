import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from "next/image"
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, userLogin } from '../redux/actions/cartAction'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home({ data }) {

  const dispatch = useDispatch()
  const route = useRouter()

  const View = (p) => {
    console.log("object", p)
    dispatch(addToCart(p))
  }
  useEffect(() => {
    const User = localStorage.getItem("userID")
    dispatch(userLogin(User))
  }, [])
  const user = useSelector((state) => state.cart.user[0])
  const filterData = data.filter((res) => {
    // console.log('obobobobob', JSON.stringify(res.userId))
    return (JSON.stringify(res)).match(user)
  })
  const searchedItem = useSelector((state) => state.cart.searchItems)
  // const actualdata = searchedItem[0].data
  console.log('objectobjectobject,searcheddtaa', searchedItem)


  return (
    < >
      <Title title="Home" />
      <div className="container">

        <div className='row'>

          {user ? (
            searchedItem.length <2?
              (filterData.map((p, id) => {
                return (

                  <div key={id} className='col-md-4 text-center'>
                    <Link href={`/${p.id}`}>
                      <img src={p.img} style={{ width: "200px", height: "300px", borderRadius: '20px' }} />
                    </Link>
                    {/* <h4>Title: {p.title}</h4>
                      <h4>Description: {p.desc}</h4> */}
                    <h4>Price: Rs.{p.price}.00</h4>
                    <button className='btn btn-outline-primary my-3'
                      onClick={() => View(p)}>Add to cart</button>
                  </div>

                )
              })
              ) : (
                searchedItem[0].data.map((p, id) => {
                  return (

                    <div key={id} className='col-md-4 text-center'>
                      <Link href={`/${p.id}`}>
                        <img src={p.img} style={{ width: "200px", height: "300px", borderRadius: '20px' }} />
                      </Link>
                      {/* <h4>Title: {p.title}</h4>
                      <h4>Description: {p.desc}</h4> */}
                      <h4>Price: Rs.{p.price}.00</h4>
                      <button className='btn btn-outline-primary my-3' onClick={() => View(p)}>Add to cart</button>

                    </div>

                  )
                })
              )) : (
            <center className="m-5">
              <h3>Sorry...
                No user logged in yet.
              </h3>

              <h4>Please <a className="text-success" onClick={() => { route.push('/user/login') }}>click here</a> to login</h4>
            </center>
          )
          }

        </div>
      </div>
    </>
  )

}
export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/item')
  const data = await res.json()
  return {
    props: { data }
  }
}
// export async function getStaticProps(){
//   const res=await fetch('http://localhost:1337/cart')
//   const data=await res.json()
//   return{
//     props:{data}
//   }
// }
