import React, { useState } from "react";
import "./styles.css";

export default function App() {
	let grade = [
		{
			name: "김기원",
			korean: "90",
			math: "86",
			english: "96",
			science: "70"
		},
		{
			name: "정기투",
			korean: "80",
			math: "70",
			english: "40",
			science: "60"
		},
		{
			name: "이기쓰리",
			korean: "60",
			math: "90",
			english: "50",
			science: "60"
		},
		{
			name: "박기포",
			korean: "90",
			math: "40",
			english: "60",
			science: "80"
		}
	];

	const [isAscending, setIsAscending] = useState(false);
	const [select, setSelect] = useState("");
	const [makingGrade, setMakingGrade] = useState(grade);

	const [name, setName] = useState("");
	const [korean, setKorean] = useState("");
	const [math, setMath] = useState("");
	const [english, setEnglish] = useState("");
	const [science, setScience] = useState("");

	const sortGrade = (g) => {
		setIsAscending(!isAscending);
		setSelect(g);
	};

	let sortedGrade = makingGrade.sort(function (a, b) {
		if (isAscending === false) {
			return a[select] - b[select];
		} else {
			return b[select] - a[select];
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		let newGrade = {
			name: name,
			korean: korean,
			math: math,
			english: english,
			science: science
		};
		setMakingGrade([...makingGrade, newGrade]);
		console.log("new Grade: ", newGrade);
	};

	const handleNameChange = (e) => {
		const { value } = e.target;
		setName(value);
	};

	const handleKoreanChange = (e) => {
		const { value } = e.target;
		setKorean(value);
	};

	const handleMathChange = (e) => {
		const { value } = e.target;
		setMath(value);
	};

	const handleEnglishChange = (e) => {
		const { value } = e.target;
		setEnglish(value);
	};

	const handleScienceChange = (e) => {
		const { value } = e.target;
		setScience(value);
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<p>Name</p>
				<input onChange={handleNameChange} />
				<br />
				<p>Korean</p>
				<input onChange={handleKoreanChange} />
				<br />
				<p>Math</p>
				<input onChange={handleMathChange} />
				<br />
				<p>English</p>
				<input onChange={handleEnglishChange} />
				<br />
				<p>Science</p>
				<input onChange={handleScienceChange} />
				<br />
				<br />
				<button>Push Grade</button>
			</form>
			<p>{name}</p>
			<p>{korean}</p>
			<p>{math}</p>
			<p>{english}</p>
			<p>{science}</p>

			<table>
				<thead>
					<tr>
						<th>Student Grade</th>
					</tr>
					<tr>
						<td>학생 이름</td>
						<td onClick={() => sortGrade("korean")}>국어</td>
						<td onClick={() => sortGrade("math")}>수학</td>
						<td onClick={() => sortGrade("english")}>영어</td>
						<td onClick={() => sortGrade("science")}>과학</td>
					</tr>
				</thead>
				<tbody>
					{sortedGrade.map((g, i) => {
						return (
							<tr key={i}>
								<td>{g.name}</td>
								<td>{g.korean}</td>
								<td>{g.math}</td>
								<td>{g.english}</td>
								<td>{g.science}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
