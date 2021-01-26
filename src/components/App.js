import React, { useState, useEffect } from 'react';
import Jeopardy from './Jeopardy';

export default function App(props) {
	const [score, setScore] = useState(0);
	const [category, setCategory] = useState('');
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');

	const getData = async () => {
		const response = await fetch(`http://jservice.io/api/random`);
		const data = await response.json();
		const jeopardyData = data[0];

		setCategory(jeopardyData.category.title.toUpperCase());
		setQuestion(jeopardyData.question);
		setAnswer(jeopardyData.answer);

		console.log(jeopardyData);
	};

	return (
		<div className="Page-wrapper">
			<h1>Jeopardy App</h1>
			<button onClick={getData} value="Get Question" />
			<h2>{category}</h2>
			<h2>{question}</h2>
			<h2>{answer}</h2>
		</div>
	);
}
