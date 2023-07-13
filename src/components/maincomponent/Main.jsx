import React from 'react';
import './main.css'
import { Container } from 'react-bootstrap/esm';
import { Button, Col, Row } from 'react-bootstrap';


function Main() {
    return (
        <div className='main'>
            <Container className=' container-main'>
                <Row className='main-row'>
                    <Col md="3" lg="3" className='m-colo1'>
                        <div className='top-img-c'>
                            <img className="p-img" src='assrets/images/331401462_901871491052076_4140015511851026313_n.jpg' alt="waqas" />
                            <span style={{ color: "white" }} className='mt-3'><h5>Waqas Ahmad</h5></span>

                            <Button className='p-btn'>Edit Profile</Button>

                        </div>




                        <div className='genral-c'>


                            <div className='general-inner'><p style={{ padding: "3px 10px", backgroundColor: "rgb(44, 44, 44) ", color: "white", padding: "4px 6px" }}>Genral</p></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-lock-50.png' alt="waqas" /> Help Center</span><span><img src="assrets/images/icons8-more-than-24.png" className='right-icon' /></span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-globe-50.png' alt="waqas" /> App Language</span><span><img src="assrets/images/icons8-more-than-24.png" className='right-icon' /></span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-favorite-50.png' alt="waqas" /> Favourite services</span><span><img src="assrets/images/icons8-more-than-24.png" className='right-icon' /></span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-location-50.png' alt="waqas" /> Address</span><span><img src="assrets/images/icons8-more-than-24.png" className='right-icon' /></span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-chat-64.png' alt="waqas" /> Support Chat</span><span><img src="assrets/images/icons8-more-than-24.png" className='right-icon' /></span></div>


                        </div>
                        <div className='genral-c'>


                            <div className='general-inner'><p style={{ padding: "3px 10px", backgroundColor: "rgb(44, 44, 44) ", padding: "4px 6px", color: "white" }}>About App</p></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-tick-mark-50.png' alt="waqas" /> Privacy Policy</span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-terms-and-conditions-50.png' alt="waqas" /> Terms & Condition</span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-setting-64.png' alt="waqas" /> legal Notices</span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-about-26.png' alt="waqas" /> About</span></div>
                            <div className='side-content'><span><img className="gn-img" src='assrets/images/icons8-star-50.png' alt="waqas" /> Rate Us</span></div>


                        </div>
                        <div className='logout-main'><Button className='logout-btn'>Log Out</Button></div>




                    </Col>





                    <Col md="9" lg="9" className='m-colo2 '>
                   
                           
                        <Row className='chat-sec'>


                            <Col xs="3" sm="3" md="4" className=' msg-box'>
                                <div>
                                    <div className='chat-search'>

                                        <img

                                            src="/assrets/images/Vector1.png"
                                            alt=""
                                            className='srch-img '
                                        />
                                        <input type='search' placeholder='search..' className='chat-inp-search' /></div>


                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>
                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>
                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>
                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>

                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>
                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>
                                    <div className='chat-user'>

                                        <div><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='chat-user-img' /></div>
                                        <div className='chat-user-msg'><div className='msg1'><span><b>Waqas ahmad</b></span><span>2:30 pm</span></div>
                                            <div className='cntnt-msg'>hi my name is waqas</div>

                                        </div>






                                    </div>


















                                </div>





                            </Col>

                            <Col xs="12" sm="9" md="8" className='inner-chat-right'>


                                <div className='right-side-chat-sec'>

                                    <div className='top-right'>
                                        <span><img src="assrets/images/icons8-less-than-24.png" className='chat-right-icon' />
                                            <span style={{ marginLeft: "7px" }}><img src="assrets/images/331401462_901871491052076_4140015511851026313_n.jpg" className='active-chat' /></span>
                                            <span style={{ color: "white", marginLeft: "7px" }}>Waqas ahmad</span>


                                        </span>
                                        <span><img src="assrets/images/icons8-menu-vertical-50.png" className='chat-right-icon' /></span>


                                    </div>


                                    <div className='chat-in'><span className='inside-chat-in'>hi how are you</span></div>

                                    <div className='chat-out'><span className='chat-inner'>iam fine an you tell me some thing .. </span></div>

                                    <div className='chat-in'><span className='inside-chat-in'>whre are you From?</span></div>
                                    <div className='chat-out'><span className='chat-inner'>iam from Pakistan .. </span></div>
                                    <div className='chat-in'><span className='inside-chat-in'>Do you have any experience in web?</span></div>
                                    <div className='chat-out'><span className='chat-inner'>Yes i have 1 year experience in react. </span></div>
                                  
                                    
                                    <div className='send-message'>

                                  <div className='last-send-msg'>      <div><input type='search' placeholder='write a message...' className='send-input' /></div> 
                                  
                                  <span style={{borderRadius:"50%",marginRight:"12px",padding:"5px",backgroundColor:" chartreuse"}}><img width='30px' height="30px" src="assrets/images/icons8-sent-50.png" className='sent-icon' /></span></div>
                                    </div>

                                </div>






                            </Col>
                        </Row>
                       

                       

                    </Col>
                </Row>



            </Container>




        </div>
    )
}

export default Main