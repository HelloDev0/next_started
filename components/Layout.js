import Nav from "./nav"
import Sidebar from "./Sidebar"

import Title from "./Title"


const Layout = ({ children }) => {
    return (
        <>
            <Title />
            <Nav />
            <div className="grid grid-cols-12 gap-2 bg-gray-400/10">
                <div className="col-span-2 bg-white">
                    <Sidebar />
                </div>
                <div className="col-span-10 bg-white">
                    {children}
                </div>
            </div>

            <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
        </>
    )
}

export default Layout
