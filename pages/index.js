import Layout from "@/components/layout/Layout";
import Dating_Section1 from "@/components/sections/homepage/Dating/Dating_Section1";
import Dating_Section2 from "@/components/sections/homepage/Dating/Dating_Section2";
import Dating_Section3 from "@/components/sections/homepage/Dating/Dating_Section3";
import Dating_Section4 from "@/components/sections/homepage/Dating/Dating_Section4";
import Dating_Section5 from "@/components/sections/homepage/Dating/Dating_Section5";
import Dating_Section6 from "@/components/sections/homepage/Dating/Dating_Section6";
import Dating_Section7 from "@/components/sections/homepage/Dating/Dating_Section7";
import Dating_Section8 from "@/components/sections/homepage/Dating/Dating_Section8";
import App_Showcase_Section2 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section2";
import App_Showcase_Section11 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section11";
import Pet_Section3 from "@/components/sections/homepage/Pet/Pet_Section3";

export default function HomeDating() {
    return (
        <>
            <Layout headerClass="is-transparent" siteContentClass="pt0 pb0"
                    pageTitle={'Explore the best offers & save in Dubai!'}
                    pageTitleDesc={'Download the Dune Deals app and start saving on your favorite brands.'}
            >
                <Dating_Section1 />
                <App_Showcase_Section2 />
                <Pet_Section3 />
            </Layout>

        </>
    )
}
