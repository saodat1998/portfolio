import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-12">
								<div className="about-desc">
									<span className="heading-meta">About Me</span>
									<h2 className="colorlib-heading">Who Am I?</h2>
									<p>
										I am a software engineer student from INHA University in Tashkent with CSE as my
										major.
									</p>
									<p>
										I had an internship in the International company called "Stylemix" (
										<a href="https://stylemix.net/">stylemix.net</a>) and learned about Wordpress{' '}
									</p>
									<p>
										Nowadays I'm seeking for new technologies such as MERN and want to hustle myself
										in this field{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
