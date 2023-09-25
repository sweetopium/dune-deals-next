import Layout from "@/components/layout/Layout";
import Dating_Section1 from "@/components/sections/homepage/Dating/Dating_Section1";
import App_Showcase_Section2 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section2";
import Pet_Section3 from "@/components/sections/homepage/Pet/Pet_Section3";
import Head from 'next/head'

export default function HomeDating() {
    return (
        <>
            <Head>
                <title>DuneDeals - Explore the best offers & save in Dubai</title>
            </Head>
            <Layout headerClass="is-transparent" siteContentClass="pt0 pb0">
                <Dating_Section1/>
                <App_Showcase_Section2/>
                <Pet_Section3/>
            </Layout>

        </>
    )
}
