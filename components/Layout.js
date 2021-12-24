import Nav from "./nav"
import Sidebar from "./Sidebar"

import Title from "./Title"
// import '@themesberg/flowbite'

const Layout = ({ children }) => {
    return (
        <>
            <Title />
            <Nav style={{fontFamily:'Poppins',fontWeight:300}}/>
            <div className="grid grid-cols-12 bg-gray-200/20 h-screen">
                <div className="col-span-2 ">
                    <Sidebar  style={{fontFamily:"Poppins",fontWeight:300}}/>
                </div>
                <div className="col-span-10 bg-gray-300/30 " style={{fontFamily:"Poppins",fontWeight:400}}> 
                    {children}
                </div>
            </div>
            {/* <script src="doctegrity/node_modules/@themesberg/flowbite/dist/flowbite.bundle.js"></script> */}
            {/* <script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script> */}
            <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}

        </>
    )
}

export default Layout
