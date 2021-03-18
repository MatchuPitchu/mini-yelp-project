import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div className="footer">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>About us</h3>
						<div className="row">
						    <div className="col-1">
                                <FontAwesomeIcon icon={['fa', 'map-pin']} fixedWidth/>
                            </div>
                        	<div className="col">
                                Berlin, capital of germany
                            </div>
                        </div>
						<div className="row">
                            <div className="col-1">
                                <FontAwesomeIcon icon={['fa', 'headset']} fixedWidth/>
                            </div>
							<div className="col">
								Call us via <a href="https://discord.com/">Discord</a>
							</div>
                        </div>
						<div className="row">
                            <div className="col-1">
						        <FontAwesomeIcon icon={['fa', 'envelope-open']} fixedWidth/>
                            </div>
							<div className="col">thesportsblog@posteo.de</div>							
						</div>
					</div>
					<div className="col">
						<h3>Follow us</h3>
						<div className="row">
							<div className="col-1 pointer">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                   			</div>
							<div className="col-1 pointer">
                              <FontAwesomeIcon icon={['fab', 'instagram']} />
                   			</div>
							<div className="col-1 pointer">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                   			</div>
					
						</div>
					</div>
					<div className="col">
						<Form>
						<h3>Contact us</h3>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control className="searchbar" type="email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>What would you like to tell us?</Form.Label>
								<Form.Control className="searchbar" as="textarea" rows={3} />
							</Form.Group>
							<button className="btn bg-light" variant="outline-secondary" type="submit">
							Submit
							</button>
						</Form>
              	    </div>
				</div>
				<hr className="hr" />
				<p className="text-center">©2021 Mini-yelp Project</p>
			</div>
        </div>
		</>
    )
}

export default Footer;
