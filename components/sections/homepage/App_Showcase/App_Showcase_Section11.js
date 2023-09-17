
export default function App_Showcase_Section11() {

    return (
        <>
            <section className="section-banner layout-04 opt120">
                <div className="container">
                    <div
                        className="inner background-yellow"
                        style={{ backgroundImage: "url(/assets/images/asc12.png)" }}
                    >
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-left spdtb pdl80 lg-pdl30 lg-pdr30">
                                    <div className="heading">
                                        <h2 className="heading-title size-xl">Get the app now</h2>
                                    </div>
                                    <div className="apps m220">
                                        <img src="/assets/images/app-store.png" alt="App Store" />
                                        <img src="/assets/images/google-play.png" alt="Google Play" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="banner-right lg-hidden">
                                    <img
                                        className="wow animate__animated   animate__fadeInRight"
                                        src="/assets/images/asc11.png"
                                        alt="Banner"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}