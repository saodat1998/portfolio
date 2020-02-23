import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-12 project animate-box" data-animate-effect="fadeInLeft">
								<div className="project-cont">
									<h3>
										<a href="https://sportgazeta.uz/uz">sportgazeta.uz</a>
									</h3>
									<div className="project2" style={{ backgroundImage: 'url(images/p1.png)' }}></div>
									<div className="desc">
										<div className="con">
											<p>SPA application</p>

											<p className="icon">
												<span>React</span>
												<span>Redux</span>
												<span>Axios</span>
												<span>Rest-api</span>
												<span>i18n</span>
												<span>
													<i className="icon-heart" />
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 project animate-box" data-animate-effect="fadeInLeft">
								<div className="project-cont">
									<h3>
										<a href="https://www.mortgagecalculatorplus.com/">mortgagecalculatorplus.com</a>
									</h3>
									<div className="project2" style={{ backgroundImage: 'url(images/p2.png)' }}></div>
									<div className="desc">
										<div className="con">
											<p>Custom calculator</p>
											<p className="icon">
												<span>Php</span>
												<span>Smarty</span>
												<span>Jquery</span>
												<span>Google page speed</span>
												<span>Chart.js</span>
												<span>
													<i className="icon-heart" />
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 project animate-box" data-animate-effect="fadeInLeft">
								<div className="project-cont">
									<h3>
										<a href="https://magblock.ru/">magblock.ru</a>
									</h3>
									<div className="project2" style={{ backgroundImage: 'url(images/p3.png)' }}></div>
									<div className="desc">
										<div className="con">
											<p>Custom calculator</p>
											<p className="icon">
												<span>Php</span>
												<span>Angular 1.0</span>
												<span>Jquery</span>
												<span>Wordpress</span>
												<span>
													<i className="icon-heart" />
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 project animate-box" data-animate-effect="fadeInLeft">
								<div className="project-cont">
									<h3>
										<a href="https://affilify.com/">affilify.com</a>
									</h3>
									<div className="project2" style={{ backgroundImage: 'url(images/p4.png)' }}></div>
									<div className="desc">
										<div className="con">
											<p>LMS Website</p>
											<p className="icon">
												<span>Php</span>
												<span>Vue js</span>
												<span>Jquery</span>
												<span>Wordpress</span>
												<span>
													<i className="icon-heart" />
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p>
									<a
										href="https://gist.github.com/saodat1998/c05a0465c0426cbfd97932e95428476e"
										target="_blank"
										className="btn btn-primary btn-lg btn-load-more"
									>
										Load more <i className="icon-reload" />
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
