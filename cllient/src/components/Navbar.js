import React from 'react';
import List from './listNav';
import imgarray from '../image';
import { Link } from 'react-scroll';

function Navbar() {
	return (
		<div>
			<nav
				class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
				id="sideNav"
			>
				<a class="navbar-brand js-scroll-trigger" href="#page-top">
					<span class="d-block d-lg-none">Mubin Momin</span>
					<span class="d-none d-lg-block">
						<img
							class="img-fluid img-profile rounded-circle mx-auto mb-2"
							src={imgarray[0]}
							alt=""
						/>
					</span>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<List name="About" />
						</Link>
						<Link
							activeClass="active"
							to="Portfolio"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<List name="Portfolio" />
						</Link>
						<Link
							activeClass="active"
							to="Skills"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<List name="Skills" />
						</Link>
						<Link
							activeClass="active"
							to="Education"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<List name="Education" />
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
