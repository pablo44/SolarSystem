import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  Row, Col } from 'react-materialize';


class StartPage extends Component {
    render (){
        return (
        <Row className="opacity grey darken-4">
            <Col className="grey darken-4" s={12} m={4} offset="m5">
                <div className="section">
                    <div className="section">
                        <div className="section ">
                            <div className="section">
                                <div className="section">
                                    <div className="section">
                                        <div className="section">
                                            <div className="section">
                                                <div className="section">
                                                    <Link to="/earth"><img src={require('../images/LogoAppSolarSystem2V.png')} alt="circle" /></Link>

                                                    {/* <Button className="btn waves-effect waves-light black" type="submit" name="action"  >Go!
                                                        <i className="material-icons center"></i> */}
                                                    {/* </Button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>


        </Row>



    )
}
    
}
export default StartPage;