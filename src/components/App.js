import React, { useState, useEffect } from 'react';
import Jeopardy from './Jeopardy';

export default function App(props) {
	const [category, setCategory] = useState('');
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [toggle, setToggle] = useState(false);
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	const getData = async () => {
		const response = await fetch(`http://jservice.io/api/random`);
		const data = await response.json();
		const jeopardyData = data[0];

		setCategory(jeopardyData.category.title.toUpperCase());
		setQuestion(jeopardyData.question);
		setAnswer(jeopardyData.answer);
		setToggle(false);

		console.log(data);
	};

	const toggleAnswer = () => {
		toggle ? setToggle(false) : setToggle(true);
	};

	return (
		<div className="Page-wrapper">
			<h1>Jeopardy App</h1>
			<img
				src="https://innerstrength.zone/wp-content/uploads/2020/03/FI-FUN-2020-03-11_17-51-07-667x354.jpg"
				alt="Will Ferrell as Alex Trebek"
			/>

			<div className="game-data">
				<div className="points">
					<h2>Points: {count}</h2>
					<div className="points-buttons">
						<button onClick={increment}>+</button>
						<button onClick={decrement}>-</button>
					</div>
				</div>
				<button onClick={getData}>Get Question</button>
				<div className="category">
					<h2>Category:</h2> <p>{category}</p>
				</div>
				<div className="question">
					<h2>Question:</h2> <p>{question}</p>
				</div>
				<button onClick={toggleAnswer}>Show Answer</button>
				<div className={toggle ? 'answer' : 'no-answer'}>
					<h2>Answer:</h2> <p>{answer.toUpperCase()}</p>
				</div>
			</div>
		</div>
	);
}
