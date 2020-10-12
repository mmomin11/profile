import React from 'react';
import pdf from '../img/resume.pdf';

function About() {
	return (
		<section className="resume-section" id="About">
			<div className="resume-section-content">
				<h1 className="mb-0">
					Mubin
					<span className="text-primary">Momin</span>
				</h1>
				<div className="subheading mb-5">
					6636 W William Cannon · Austin, TX 78735 · (210) 875-6984 ·
					<a href="mailto:name@email.com">mmomin11@gmail.com</a>
				</div>
				<p className="lead mb-5">
					I am currently a professional looking to mold myself into a
					successfull Full-Stack developer. I hope to develop my "toolbelt" by
					adding skills in HTML, CSS, Javascript, and etc. Through the contents
					of this site, I will be able to deliver and support my abilities in
					this field of work.
				</p>
				<div className="social-icons">
					<a
						className="social-icon"
						href="https://www.linkedin.com/in/mubin-momin-717230a8/"
						target="_blank"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
					<a
						className="social-icon"
						href="https://github.com/mmomin11"
						target="_blank"
					>
						<i className="fab fa-github"></i>
					</a>
					<a className="social-icon" href={pdf} target="_blank">
						<i className="fas fa-file"></i>
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
