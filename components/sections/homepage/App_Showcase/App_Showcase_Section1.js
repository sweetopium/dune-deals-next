
export default function App_Showcase_Section1() {
    return (
        <>
            <section
                className="section background-overlay background-full pdt180 oveflow-hidden"
                style={{ backgroundImage: "url(/assets/images/hero-01.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading heading-alway-white wow animate__animated animate__fadeInLeft ">
                                <div className="heading-sub">App showcase</div>
                                <h2 className="heading-title size-xl">
                                    Showcase your <br /> App in one place
                                </h2>
                                <div className="heading-desc" data-wow animate__animated-delay="0.5s">
                                    Most Trending, Clean and Elegant Design based on deeply research
                                </div>
                            </div>
                            <div className="apps m220 wow animate__animated animate__fadeInLeft ">
                                <img src="/assets/images/app-store.png" alt="App Store" />
                                <img src="/assets/images/google-play.png" alt="Google Play" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images align-right layout-01 lg-mt32">
                                <img
                                    className="img01 wow animate__animated animate__fadeInUp "
                                    data-wow animate__animated-delay="0.5s"
                                    src="/assets/images/asc1.png"
                                    alt="Image"
                                />
                                <img
                                    className="img02 wow animate__animated animate__fadeInUp "
                                    src="/assets/images/asc2.png"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}