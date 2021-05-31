import React, { useEffect, useState }  from 'react'
import axios from 'axios'

const URL = "http://localhost:51578/api/Planet";

const Edit = (data) => {

	var id = data.match.params.id;
	var pName = [];
	var planet;

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
		if(id == planets[i].id){
			planet = planets[i];
		}
	}

	showSideBar(pName);

	return (
		<div style={{ marginLeft: "10%" }}>
			<div className="form-horizontal" style={{backgroundColor: "rgba(200,200,200,0.4)", color: "black", fontWeight: "bold", borderRadius: "15px", paddingLeft: "15px", marginRight: "20%"}}>
		        <h4 style={{ paddingTop: "20px"}}>Add Planet</h4>
		        <hr />
		        
		        <div className="form-group">
		            <label className="control-label col-md-4" for="name">Name</label>
		            <input className="form-control" type="text" name="name" id="name" defaultValue={planet.name}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="description">Description</label>
		            <input className="form-control" type="text" name="description" id="description" defaultValue={planet.description}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="exploration">Exploration</label>
		            <input className="form-control" type="text" name="exploration" id="exploration" defaultValue={planet.exploration}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="sizeAndDistance">Size and Distance</label>
		            <input className="form-control" type="text" name="sizeAndDistance" id="sizeAndDistance" defaultValue={planet.sizeAndDistance}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="orbitAndRotation">Orbit and Rotation</label>
		            <input className="form-control" type="text" name="orbitAndRotation" id="orbitAndRotation" defaultValue={planet.orbitAndRotation}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="structure">Structure</label>
		            <input className="form-control" type="text" name="structure" id="structure" defaultValue={planet.structure}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="formation">Formation</label>
		            <input className="form-control" type="text" name="formation" id="formation" defaultValue={planet.formation}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="distanceFromTheSun">Distance from the Sun</label>
		            <input className="form-control" type="text" name="distanceFromTheSun" id="distanceFromTheSun" defaultValue={planet.distanceFromTheSun}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="periodOfRotation">Period of Rotation</label>
		            <input className="form-control" type="text" name="periodOfRotation" id="periodOfRotation" defaultValue={planet.periodOfRotation}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="periodOfRevolution">Period of Revolultion</label>
		            <input className="form-control" type="text" name="periodOfRevolution" id="periodOfRevolution" defaultValue={planet.periodOfRevolution}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="velocityOfRevolution">Velocity of Revolution</label>
		            <input className="form-control" type="text" name="velocityOfRevolution" id="velocityOfRevolution" defaultValue={planet.velocityOfRevolution}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="dimater">Diameter</label>
		            <input className="form-control" type="text" name="dimater" id="dimater" defaultValue={planet.dimater}></input>
		        </div>

		        <div className="form-group">
		            <label className="control-label col-md-2" for="knownSatellites">Known Satellites</label>
		            <input className="form-control" type="text" name="knownSatellites" id="knownSatellites" defaultValue={planet.knownSatellites}></input>
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
		var planet = {
			id: id,
			name: document.getElementById("name").value,
			description: document.getElementById("description").value,
			exploration: document.getElementById("exploration").value,
			sizeAndDistance: document.getElementById("sizeAndDistance").value,
			orbitAndRotation: document.getElementById("orbitAndRotation").value,
			structure: document.getElementById("structure").value,
			formation: document.getElementById("formation").value,
			distanceFromTheSun: document.getElementById("distanceFromTheSun").value,
			periodOfRotation: document.getElementById("periodOfRotation").value,
			periodOfRevolution: document.getElementById("periodOfRevolution").value,
			velocityOfRevolution: document.getElementById("velocityOfRevolution").value,
			dimater: document.getElementById("dimater").value,
			knownSatellites: document.getElementById("knownSatellites").value
		};
		
		axios.put('http://localhost:51578/api/Planet', planet
		)
			.then(function (response) {
			console.log(response);
			window.location.reload();
		})
			.catch(function (error) {
			console.log(error);
		});
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

export default Edit