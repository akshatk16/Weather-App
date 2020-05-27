import React, {useState} from 'react';
import Footer from './Footer/Footer'


const api = {
	key: process.env.REACT_APP_API_KEY,
	base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = e => {
		if(e.charCode === 13) {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
				setWeather(result)
				setQuery('')
			});
		}
	}


	const dateBuilder = (dateFull) => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		let day = days[dateFull.getDay()];
		let date = dateFull.getDate();
		let month = months[dateFull.getMonth()];
		let year = dateFull.getFullYear();

		return `${day}, ${date} ${month} ${year}`
	}
	return (
		<div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 20) ? "App warm" : "App cold") : "App"}>
		<main>
			<div className="search-box">
				<input type="text"
					className="search-bar"
					placeholder="Search..."
					onChange={e=> setQuery(e.target.value)}
					value={query}
					onKeyPress={search} />
			</div>
			{(typeof weather.main != 'undefined') ? (
			<div>
				<div className="location-box">
					<div className="location">{weather.name}, {weather.sys.country}</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
				<div className="weather-box">
					<div className="temperature">
						{Math.round(weather.main.temp)}°C
					</div>
					<div className="weather">{weather.weather[0].main}</div>
				</div>
			</div> ) : ("")}
			<Footer />
		</main>
	</div>
	);
}

export default App;
