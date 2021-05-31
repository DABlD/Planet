import React, { useEffect, useState }  from 'react'
import axios from 'axios'
// import parse from 'html-react-parser'

const URL = "http://localhost:51578/api/Planet";

const Index = () => {
	var table = "";
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
		<div>
			 <div className="container w3-row w3-padding-64">
			    <h2 className="w3-text-teal" align="center">
				    <b>The Planets of the Solar System</b>
				    <a href="http://localhost:3000/create" className="btn btn-success pull-right" data-toggle="tooltip" title="Add Planet">
		                <span className="fa fa-plus"></span>
		            </a>
				</h2><br/>

			     <table className="table" align="center">
			     	<thead>
			         <tr>
			             <th scope="col" className="w3-text-teal"><b>Planet</b></th>
			             <th scope="col" className="w3-text-teal"><b>Distance from Sun (Million kMs)</b></th>
			             <th scope="col" className="w3-text-teal"><b>Period of Rotation</b></th>
			             <th scope="col" className="w3-text-teal"><b>Period of Revolution</b></th>
			             <th scope="col" className="w3-text-teal"><b>Velocity of Revs per Second</b></th>
			             <th scope="col" className="w3-text-teal"><b>Diameter (kM)</b></th>
			             <th scope="col" className="w3-text-teal"><b>Number of Known Satellites</b></th>
			             <th scope="col" className="w3-text-teal" style={{ width: "120px"}}><b>Actions</b></th>
			         </tr>
			     	</thead>
			     	<tbody>
						{planets.map((planet, index) => (
							<tr key={index}>
								<th scope="col"><b> <a href={"http://localhost:3000/Planet/" + planet.id}> {planet.name} </a></b></th>
								<td><b>{planet.distanceFromTheSun}</b></td>
								<td><b>{planet.periodOfRotation}</b></td>
								<td><b>{planet.periodOfRevolution}</b></td>
								<td><b>{planet.velocityOfRevolution} kM</b></td>
								<td><b>{planet.dimater}</b></td>
								<td><b>{planet.knownSatellites}</b></td>
								<td>
								    <a href="#" className="btn btn-info" data-toggle="tooltip" title="Edit Planet" onClick={editzxc(planet.id)}>
								        <span className="fa fa-pencil"></span>
								    </a>
								    <a href="#" className="btn btn-danger" data-toggle="tooltip" title="Delete Planet" onClick={deletezxc(planet.id)}>
								        <span className="fa fa-trash"></span>
								    </a>
								</td>  
							</tr>
						))}
			     	</tbody>
			     </table>
			 </div>

			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			   <div className="carousel-indicators">
			     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
			     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			   </div>
			   <div className="carousel-inner">
			     <div className="carousel-item active">
			       <a href="http://planetwebsite.azurewebsites.net/cmercury.html"><img src="assets/mercury.jpg" className="d-block w-100" alt="..."/></a>
			     </div>
			     <div className="carousel-item">
			       <a href="http://planetwebsite.azurewebsites.net/gjupiter.html"><img src="assets/jupiter.jpg" className="d-block w-100" alt="..."/></a>
			     </div>
			     <div className="carousel-item">
			       <a href="http://planetwebsite.azurewebsites.net/hsaturn.html"><img src="assets/saturn.jpg" className="d-block w-100" alt="..."/></a>
			     </div>
			   </div>
			   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			     <span className="visually-hidden">Previous</span>
			   </button>
			   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			     <span className="carousel-control-next-icon" aria-hidden="true"></span>
			     <span className="visually-hidden">Next</span>
			   </button>
			 </div>
		</div>
	)

	function editzxc(id){
		return () => {
			window.location.href = "http://localhost:3000/edit/" + id;
		}
	}

	function deletezxc(id){
		return () => {
			axios.delete(URL + "/" + id,
			)
				.then(function (response) {
				console.log(response);
				window.location.reload();
			})
				.catch(function (error) {
				console.log(error);
			});
		}
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
			sidebar += `<li><a href='http://localhost:3000/Planet/${planet.id}'>${planet.name}</a></li>`;
		});

		document.getElementsByClassName("sidebar-nav")[0].innerHTML = sidebar;
	}
}

export default Index