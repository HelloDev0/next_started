import Nav from "../nav"

import Title from "../Title"
import AdminSidebar from "./AdminSidebar"

const AdminLayout = ({children}) => {
    return (
        <>
            <Title />
            <Nav style={{fontFamily:'Poppins',fontWeight:300}}/>
            <div className="grid grid-cols-12 bg-gray-200/20 h-screen">
                <div className="col-span-2 ">
                    <AdminSidebar style={{fontFamily:"Poppins",fontWeight:300}}/>
                </div>
                
                <div className="col-span-10 bg-gray-300/30 " style={{fontFamily:"Poppins",fontWeight:400}}> 
                    {children}
                </div>
            </div>
            {/* <script src="doctegrity/node_modules/@themesberg/flowbite/dist/flowbite.bundle.js"></script> */}
            {/* <script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script> */}
            <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        </>
    )
}

export default AdminLayout
