import Nav from "./nav"

import Navbar from "./Navbar"
import Title from "./Title"


const Layout = ({children}) => {
    return (
        <>
            <Title/>
            <Nav/>
           {children} 
        </>
    )
}

export default Layout
