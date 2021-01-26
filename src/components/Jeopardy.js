import React from 'react';

export default function Jeopardy(props) {
	return (
		<>
			<div className="column">
				<h2>Question: {props.question.question}</h2>
			</div>
		</>
	);
}
