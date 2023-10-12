import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CyonitesList from "../../components/cyonites_list/cyonites_list";
import CyonitePageMain from "../../components/cyonites_page/cyonite_main";



function Cyonites(){
    return (
        <div>
            <Header />
            <CyonitePageMain />
            <Footer />
        </div>
    )
}
export default Cyonites;