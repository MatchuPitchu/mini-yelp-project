import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
        <div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-lg-4 mt-3">
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
							<div className="col">mini-yelp@posteo.de</div>							
						</div>
					</div>
					<div className="col-sm-6 col-lg-3 mt-3">
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
					<div className="col-sm-12 col-lg-5 mt-3">
						<form>
						<h3>Contact us</h3>
							<div className="mb-3 input-group">
                                <span className="input-group-text span-custom">First Name</span>
                                <input type="text" className="form-control inputfield" placeholder="..." />
                            </div>
							<div className="mb-3 input-group">
                                <span className="input-group-text span-custom">Last Name</span>
                                <input type="text" className="form-control inputfield" placeholder="..." />
                            </div>
							<div className="mb-3 input-group">
                                <span className="input-group-text span-custom">Email</span>
                                <input type="email" className="form-control inputfield" placeholder="..." />
                                <div id="emailHelp" className="form-text">Mail is only used to reply</div>
                            </div>
							<div className="mb-3 input-group">
								<span className="input-group-text span-custom">Message</span>
								<textarea className="form-control inputfield" aria-label="With textarea"></textarea>
							</div>
							<button className="btn bg-light span-custom" variant="outline-secondary" type="submit">
							    Submit
							</button>
						</form>
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
