import React, { Component } from 'react';

export default class Timeline extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="timeline">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">highlights</span>
								<h2 className="colorlib-heading animate-box">Timeline</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-3">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													Junior React Developer <span>January, 2020-present</span>
												</h2>
												<p>
													I have been learning React js for a long time, and now I found
													strength in myself to do projects in this framework. React is really
													fast and stucture loving framework
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-4">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													Frontend Developer (Wordpress) <span>April, 2019 - December, 2019</span>
												</h2>
												<p>
													I had an internship in "Stylemix" and learned to work with live
													websites and Wordpress Secrets. Wordpress is really suitable for the
													ones who do not want to code and just use templates and plugins. But
													in my job my responsibility was to create plugins and templates for
													clients. I learned a lot of hooks and actions which are the
													essentials of Wordpress
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-5">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													IELTS Mentor <span>October, 2019 - March, 2019</span>
												</h2>
												<p>
													I have an IELTS certificate with 7.0 band score which allowed me to
													work in learning center "Zippy students". It was a big experience to
													try myself in teaching and as well as learning in the process of it.
													I tried to make fun as well as to be strict. My students levelled up
													from pre-ielts to ielts level
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-6">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													English teacher <span>June, 2019 - August, 2019</span>
												</h2>
												<p>
													I worked in the summer camp "WEST camp" where taught children from
													10 to 14 to the basics of children. I had manage about 35 children
													by my own and get attention of them. Everyday before the lesson
													tried to learn by heart songs and Tongue Twisters.
												</p>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry begin animate-box"
										data-animate-effect="fadeInBottom"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-none"></div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
