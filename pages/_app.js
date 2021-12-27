
import AdminLayout from '../components/admin/AdminLayout'
import Layout from '../components/Layout'
import '../styles/globals.css'
// import '@themesberg/flowbite'

function MyApp({ Component, pageProps }) {

  // useEffect(()=>{
  //   localStorage.setItem("ser","debiprasad")
  // },[])
  const User='debiprasad'
  return (
  <>
  {!User?(
    <Layout> 
      <Component {...pageProps} />
    </Layout>
    ):(
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    )}
  </>
  )
}

export default MyApp
