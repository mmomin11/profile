import React from 'react';

function List(props) {
	return (
		<li className="nav-item">
			<a className="nav-link js-scroll-trigger" href={`#${props.name}`}>
				{props.name}
			</a>
		</li>
	);
}

export default List;
