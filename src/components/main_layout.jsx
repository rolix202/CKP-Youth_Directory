import React from "react";
import Header from "./header";
import Footer from "./footer";


// since header and footer are required in most pages, we created a layout and pass children to them which is in between the header and footer, children consist of all the components rapped inside the MainLayout component

function MainLayout({ children }){
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
export default MainLayout