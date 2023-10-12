import React from "react";
import MainLayout from "../../components/main_layout";
import Hero from "../../components/hero";
import Featured from "./container/featured_persons";
import DeveloperForm from "./container/developer_form";
// import CyonitesList from "../../components/cyonites_list/cyonites_list";
import Faq from "../../components/faq/faq";
import Developer from "../../components/developer/developer";
// import SecHeader from "../../components/section_header";
// import FeaturedCyonites from "./container/featured_cyonites";
import CyonitesSection from "../../components/cyonites_list/cyonites_section";

function Homepage() {
  return (
        <MainLayout>
            <Hero />
            <Featured />
            <DeveloperForm />
            <CyonitesSection />
            {/* <CyonitesList /> */}
            <Faq />
            {/* <SecHeader /> */}
            <Developer />
        </MainLayout>
  );
}

export default Homepage;
