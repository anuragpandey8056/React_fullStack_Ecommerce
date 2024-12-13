import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

import { Input, Button } from "@material-tailwind/react";


const Footer = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <>

            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>

                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <img
                                            src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=203"
                                            width="200"
                                            height="100"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start>
                                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>

                    <section className='mb-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                            sequi voluptate quas.
                        </p>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='6' md='6' className='mb-2 mb-md-0'>
                                <h5 className='text-uppercase'>About Us</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Our story
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-2 mb-md-0'>
                                <h5 className='text-uppercase'>Collection</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Adventure Gear

                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Eco Essentials

                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Scoot Accessories

                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Style & Safety

                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>


                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>


        </>
    )
}
export default Footer;