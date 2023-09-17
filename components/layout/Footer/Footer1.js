import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">

                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">© 2023 DuneDeals. All rights reserved</div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy" title="Terms">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" title="Privacy Policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}