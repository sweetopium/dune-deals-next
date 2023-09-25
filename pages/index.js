import Layout from "@/components/layout/Layout";
import Dating_Section1 from "@/components/sections/homepage/Dating/Dating_Section1";
import App_Showcase_Section2 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section2";
import Pet_Section3 from "@/components/sections/homepage/Pet/Pet_Section3";
import Head from 'next/head'
import Script from "next/script";

export default function HomeDating() {
    return (
        <>
            <Head>
                <title>DuneDeals - Explore the best offers & save in Dubai</title>

                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NFKW7Z54');`
                }} />

            </Head>
            <Layout headerClass="is-transparent" siteContentClass="pt0 pb0">
                <Dating_Section1/>
                <App_Showcase_Section2/>
                <Pet_Section3/>
            </Layout>

        </>
    )
}
