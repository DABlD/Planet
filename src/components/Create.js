import React, { useEffect, useState }  from 'react'
import axios from 'axios'

const URL = "http://localhost:51578/api/Planet";

const Create = () => {

	var pName = [];

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

	for (var i = 0; i < planets.length; i++) {
		pName.push({id: planets[i].id, name: planets[i].name});
	}

	showSideBar(pName);

	return (
		<div style={{ marginLeft: "10%" }}>
			<div className="form-horizontal" style={{backgroundColor: "rgba(200,200,200,0.4)", color: "black", fontWeight: "bold", borderRadius: "15px", paddingLeft: "15px", marginRight: "20%"}}>
		        <h4 style={{ paddingTop: "20px"}}>Add Planet</h4>
		        <hr />
		        
		        <div className="form-group">
		            <label className="control-label col-md-4" for="name">Name</label>
		            <input className="form-control" type="text" name="name" id="name"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="description">Description</label>
		            <input className="form-control" type="text" name="description" id="description"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="exploration">Exploration</label>
		            <input className="form-control" type="text" name="exploration" id="exploration"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="sizeAndDistance">Size and Distance</label>
		            <input className="form-control" type="text" name="sizeAndDistance" id="sizeAndDistance"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="orbitAndRotation">Orbit and Rotation</label>
		            <input className="form-control" type="text" name="orbitAndRotation" id="orbitAndRotation"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="structure">Structure</label>
		            <input className="form-control" type="text" name="structure" id="structure"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="formation">Formation</label>
		            <input className="form-control" type="text" name="formation" id="formation"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="distanceFromTheSun">Distance from the Sun</label>
		            <input className="form-control" type="text" name="distanceFromTheSun" id="distanceFromTheSun"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="periodOfRotation">Period of Rotation</label>
		            <input className="form-control" type="text" name="periodOfRotation" id="periodOfRotation"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="periodOfRevolution">Period of Revolultion</label>
		            <input className="form-control" type="text" name="periodOfRevolution" id="periodOfRevolution"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="velocityOfRevolution">Velocity of Revolution</label>
		            <input className="form-control" type="text" name="velocityOfRevolution" id="velocityOfRevolution"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="dimater">Diameter</label>
		            <input className="form-control" type="text" name="dimater" id="dimater"></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="knownSatellites">Known Satellites</label>
		            <input className="form-control" type="text" name="knownSatellites" id="knownSatellites"></input>
		        </div>

		        <br />
		        <div className="form-group">
		            <div className="col-md-offset-2 col-md-10">
		                <input type="submit" value="Create" className="fa fa-plus" onClick={submitForm}/>
		            </div>
		        </div>
		    </div>
		</div>
	)

	function submitForm(){
		var planet = [];
		planet.name = document.getElementById("name").value;
		planet.description = document.getElementById("description").value;
		planet.exploration = document.getElementById("exploration").value;
		planet.sizeAndDistance = document.getElementById("sizeAndDistance").value;
		planet.orbitAndRotation = document.getElementById("orbitAndRotation").value;
		planet.structure = document.getElementById("structure").value;
		planet.formation = document.getElementById("formation").value;
		planet.distanceFromTheSun = document.getElementById("distanceFromTheSun").value;
		planet.periodOfRotation = document.getElementById("periodOfRotation").value;
		planet.periodOfRevolution = document.getElementById("periodOfRevolution").value;
		planet.velocityOfRevolution = document.getElementById("velocityOfRevolution").value;
		planet.dimater = document.getElementById("dimater").value;
		planet.knownSatellites = document.getElementById("knownSatellites").value;
		
		
	}

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

export default Create