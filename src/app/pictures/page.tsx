"use client";

import { useState, useEffect } from 'react';

export default function Home() {
	const [pictures, setPictures] = useState([]);
	const [form, setForm] = useState({ description: '', path: '' });

	useEffect(() => {
		fetchPictures();
	}, []);

	const fetchPictures = async () => {
		const res = await fetch('/api/pictures');
		const data = await res.json();
		setPictures(data.data);
	};

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await fetch('/api/pictures', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form)
			});
			// fetchPictures();
			// setForm({ description: '', path: '' });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Pictures</h1>
			<form onSubmit={handleSubmit}>
				<input
					name="description"
					placeholder="Picture name"
					value={form.description}
					onChange={handleChange}
				/>
				<input
					name="path"
					placeholder="Picture path"
					value={form.path}
					onChange={handleChange}
				/>
				<button type="submit">Add Picture</button>
			</form>
		</div>
	);
}