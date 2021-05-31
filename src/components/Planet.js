import React, { useEffect, useState }  from 'react'
import axios from 'axios'

const URL = "http://localhost:51578/api/Planet";

const Planet = (data) => {

	var pName = [];

	const sid = data.match.params.id;
	const [isLoading, setLoading] = useState(true);
	const [planets, setPlanets] = useState();

	useEffect(() => {
		axios.get(URL).then(response => {
			setPlanets(response.data);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="App">Loading...</div>;
	}

	var sPlanet;
	for (var i = 0; i < planets.length; i++) {
		pName.push({id: planets[i].id, name: planets[i].name});

		if(planets[i].id == sid){
			sPlanet = planets[i];
		}
	}

	showSideBar(pName);

	return (
		<div>
			<div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>The Planet { sPlanet.name }</b></h1>
                    <p style={{ color:"white" }}>
                        { sPlanet.description }
                    </p>
                </div>
            </div>

            <div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Exploration</b></h1>
                    <p style={{ color:"white" }}>
                        { sPlanet.exploration }
                    </p>
                </div>
            </div>

            <div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Size and Distance</b></h1>
                    <p style={{ color:"white" }}>
                        { sPlanet.sizeAndDistance }
                    </p>
                </div>
            </div>

            <div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Orbit and Rotation</b></h1>
                    <p style={{ color:"white" }}>
                        { sPlanet.orbitAndRotation }
                    </p>
                </div>
            </div>

            <div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Structure</b></h1>
                    <p style={{ color:"white" }}>
                        { sPlanet.structure }
                    </p>
                </div>
            </div>

            <div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Formation</b></h1>
                    <p style={{ color:"white" }}>
                       { sPlanet.formation }
                    </p>
                </div>
            </div>
		</div>
	)

	function showSideBar(planets){
		var sidebar = `
            <li class="sidebar-brand">
                Menu
            </li>
            <li>
                <a href="http://localhost:3000/solarSystem">Solar System</a>
            </li>
		`;
		planets.forEach(planet => {
			sidebar += `<li><a href="http://localhost:3000/planet/${planet.id}">${planet.name}</a></li>`;
		});

		document.getElementsByClassName("sidebar-nav")[0].innerHTML = sidebar;
	}
}

export default Planet