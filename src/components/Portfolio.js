import React from 'react';
import imgarray from '../image';

function Portfolio() {
	return (
		<section
			className="resume-section"
			id="Portfolio"
			style={{ paddingTop: '50px' }}
		>
			<div className="resume-section-content">
				<h2 className="mb-5">Portfolio</h2>
				<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="flex-grow-1">
						<h3 className="mb-0">
							Project 1 - PubIO
							<a href="https://github.com/pubIO-2020/pubIO" target="_blank">
								<button
									type="button"
									className="btn btn-primary"
									style={{ marginLeft: '10px' }}
								>
									Click here for more information.
								</button>
							</a>
						</h3>
						<div className="subheading mb-3">
							Mobile Link:
							<a href="https://expo.io/@pubio/pubIO">
								pubIO Application (only Android)
							</a>
						</div>
						<p>
							The app will allow customers to select exclusive bar crawl deals
							from prebuilt bundles and receive a barcode used to redeem drink
							special. These specials will be provided by participating bars in
							the Austin area through their personal admin website.
						</p>
					</div>
					<div>
						<img src={imgarray[2]} alt="" />
					</div>
				</div>

				<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="flex-grow-1">
						<h3 className="mb-0">
							Project 2 - Autoban
							<a
								href="https://github.com/TheAutobanApp/Autoban"
								target="_blank"
							>
								<button
									type="button"
									className="btn btn-primary"
									style={{ marginLeft: '10px' }}
								>
									Click here for more information.
								</button>
							</a>
						</h3>
						<div className="subheading mb-3">
							Web Link:
							<a href="https://autobanprod.herokuapp.com/">Autoban App</a>
						</div>
						<p>
							An app to help keep your team activities organized and up-to-date.
							This app allows the user to create teams and projects within those
							teams and be able to add team members to edit and view created
							projects.
						</p>
					</div>
					<div>
						<img src={imgarray[5]} alt="" width="150px" />
					</div>
				</div>

				<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="flex-grow-1">
						<h3 className="mb-0">
							Password Generator
							<a
								href="https://github.com/mmomin11/password_generator"
								target="_blank"
							>
								<button
									type="button"
									className="btn btn-primary"
									style={{ marginLeft: '10px' }}
								>
									Click here for more information.
								</button>
							</a>
						</h3>
						<div className="subheading mb-3">
							Link:
							<a href="https://mmomin11.github.io/password_generator/">
								Password Generator Site
							</a>
						</div>
						<p>
							This application will allow you to quickly generate a password
							with the criteria you have selected from a series of prompts.
						</p>
					</div>
					<div>
						<img src={imgarray[1]} alt="" width="150px" />
					</div>
				</div>

				<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div class="flex-grow-1">
						<h3 class="mb-0">
							Workday Scheduler
							<a
								href="https://github.com/mmomin11/workday_scheduler"
								target="_blank"
							>
								<button
									type="button"
									className="btn btn-primary"
									style={{ marginLeft: '10px' }}
								>
									Click here for more information.
								</button>
							</a>
						</h3>
						<div class="subheading mb-3">
							Link:
							<a href="https://mmomin11.github.io/workday_scheduler/">
								Workday Scheduler Site
							</a>
						</div>
						<p>
							A simple calendar application that allows the user to save events
							or each hour of the day. This app runs in the browser and features
							dynamically changing HTML and CSS powered by jQuery.
						</p>
					</div>
					<div>
						<img src={imgarray[3]} alt="" width="150px" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
