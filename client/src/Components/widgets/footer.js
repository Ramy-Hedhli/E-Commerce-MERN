import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const FooterR = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/ramy.hedhly/' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>

                    <a href='https://www.linkedin.com/in/hedhli-ramy-36056689/' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>

                    <a href='https://github.com/Ramy-Hedhli' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>

                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Ramy-Market
                            </h6>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </p>
                        </MDBCol>


                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Manzel Jemil, Bizerte
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                Rmhedhly@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 216 55 47 18 17
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 216 21 47 18 10
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    Ramy Hedhli
                </a>
            </div>
        </MDBFooter>
    )
}

export default FooterR