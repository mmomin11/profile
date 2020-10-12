import React from 'react';

function Education() {
	return (
		<section className="resume-section" id="Education">
			<div className="resume-section-content">
				<h2 className="mb-5">Education</h2>
				<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div className="flex-grow-1">
						<h3 className="mb-0">Trinity University - San Antonio</h3>
						<div className="subheading mb-3">Bachelor of Science</div>
						<div>Finance</div>
					</div>
					<div className="flex-shrink-0">
						<span className="text-primary">August 2011 - May 2015</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;
