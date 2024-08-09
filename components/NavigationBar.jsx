import React, { useState } from 'react';
import { Nav, Navbar, Offcanvas, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaSitemap, FaSearch } from "react-icons/fa";
import './css/navigationBar.css';
import logo from '../public/images/BSPTCL Logo & Name.gif';
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import mediclaim from '../public/images/mediclaim.png'
import Email from '../public/images/Email.jpg'
import callDirectory from '../public/images/callDirectory.jpg'
import Twitter from '../public/images/Twitter.jpg'


//overlay


function NavigationBar() {
    //offcanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //About Dropdown
    const [isAboutHovered, setAboutHovered] = useState(false);

    //Employee dropdown
    const [isHovered, setIsHovered] = useState(false);

    //transmission dropdown
    const [isTransmissionHovered, transmissionHovered] = useState(false);

    //Media dropdown
    const [isMediaHovered, setMediaHovered] = useState(false);

    // Procrument dropdown
    const [isProcurementHovered, setProcurementHovered] = useState(false);

    //SLDC dropdown
    const [isSLDCHovered, setSLDCHovered] = useState(false);

    //voice search
        const [text, setText] = useState('');
    
        const voiceSearch = () => {
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = 'en-GB';
            recognition.onresult = function(event) {
                setText(event.results[0][0].transcript);
                console.log(event.results[0][0].transcript);
            }
            recognition.start();
        }

    return (
        <>
            {/* ---------utility link--------------- */}
            <div className='utilityLink'>
                <a href="" style={{ borderRight: '1px solid gray' }}>Skip to Main Content</a>
                <hr />
                <a href="" style={{ borderRight: '1px solid gray' }}>Screen Reader</a>
                <a href="" >A-</a>
                <a href="" >A</a>
                <a href="" style={{ borderRight: '1px solid gray' }}>A+</a>
                <a href="" ><MdSunny /></a>
                <a href="" style={{ borderRight: '1px solid gray' }}><FaMoon /></a>
                <a href="" ><RiEnglishInput /></a>
                <a href="" style={{ borderRight: '1px solid gray' }}>हि</a>
                <a href=""><FaSitemap /></a>
            </div>
            {/* -------------------utility link end-------------- */}

            <div className='parent'>
                <div className="logoAndLink">
                    {/* ------------Company Logo ----------------------*/}
                    <div className='companyLogo'>
                        <Image src={logo} loop="1" alt='BSPTCL' className='logoImage' />
                    </div>

                    {/* -------------------Main Link----------------- */}
                    <div className='mainLinkAndSearchBar'>
                        {/* -----search bar and company link----------  */}
                        <div className="searchBarAndCompanyLink">
                            {/* ----------------Search Bar------------ */}
                            <div className='searchBar'>
                                <span style={{ marginRight: '8px' }}>
                                    <FaSearch />
                                </span>
                                <input
                                    name="voiceText"
                                    id="voiceText"
                                    placeholder="Enter Your Text"
                                    style={{ border: '0px', height: '1.4rem', width: '100%' }}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></input>
                                <span onClick={voiceSearch}><FaMicrophone /></span>
                            </div>
                           
                        </div>

                        {/* ----------------------Main Link---------------------------------- */}
                        <div className="mainLink">
                            <div className="crossEffect"></div>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                        {/* ----About Us--- */}
                                        <Nav.Link href="#features" className='navLinkcolor'
                                            onMouseOver={() => setAboutHovered(true)}
                                            onMouseLeave={() => setAboutHovered(false)}>
                                            About Us<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isAboutHovered && (

                                                <div className='AboutDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First link of transmission</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* Transmission Link and Dropdwon */}


                                        <Nav.Link href="" className='navLinkcolor'
                                            onMouseOver={() => transmissionHovered(true)}
                                            onMouseLeave={() => transmissionHovered(false)}
                                        >
                                            Transmission N/W<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isTransmissionHovered && (

                                                <div className='transmissionDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First link of transmission</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* ------------Employee Section---------- */}
                                        <Nav.Link
                                            className='navLinkcolor'
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            Employee <span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isHovered && (

                                                <div className='employeeDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>


                                        {/* Media Section */}
                                        <Nav.Link href="#deets"
                                            className='navLinkcolor'
                                            onMouseOver={() => setMediaHovered(true)}
                                            onMouseLeave={() => setMediaHovered(false)}>
                                            Media<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isMediaHovered && (

                                                <div className='mediaDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First link of transmission</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* Procurement Section */}

                                        <Nav.Link href="" className='navLinkcolor'
                                            onMouseOver={() => setProcurementHovered(true)}
                                            onMouseLeave={() => setProcurementHovered(false)}>
                                            Procurement<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isProcurementHovered && (

                                                <div className='procurementDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First link of transmission</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* SLDC Section */}
                                        <Nav.Link href="#memes" className='navLinkcolor'
                                            onMouseOver={() => setSLDCHovered(true)}
                                            onMouseLeave={() => setSLDCHovered(false)}>
                                            SLDC<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isSLDCHovered && (

                                                <div className='SLDCDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>First link of transmission</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Second Link</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Third Link</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>


                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                        <Nav.Link href="#" className='navLinkcolor'>
                                            <RxHamburgerMenu onClick={handleShow} />
                                            <Offcanvas show={show} onHide={handleClose} style={{ background: 'linear-gradient(to right, #243B55, #141E30)', color: 'white' }}>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>UTILITY LINK</Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body style={{ backgroundColor: 'gray' }}>
                                                    <div className="button-container">
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="btn">Button 1</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 2</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 3</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 4</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 5</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 6</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 7</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 8</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 9</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
