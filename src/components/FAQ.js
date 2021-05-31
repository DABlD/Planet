import React, { useEffect, useState }  from 'react'
import axios from 'axios'

const URL = "http://localhost:51578/api/Planet";

const FAQ = () => {

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
			<div className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Frequently Asked Questions</b></h1>
                    <p style={{ color:"white", "textAlign":"justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat neque eget lacus ornare tincidunt. Aenean non semper enim, porttitor fermentum turpis. Sed pharetra, elit ut tristique tincidunt, lacus sem ultricies tortor, eu vulputate elit leo eget est. Cras hendrerit lacus sit amet erat finibus, in blandit lorem dapibus. Ut varius, augue nec porta ultricies, libero metus pretium nunc, posuere volutpat arcu metus a lacus. Nulla bibendum laoreet neque non auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta metus non libero accumsan, a cursus dolor elementum. Cras ac molestie nulla. Aliquam condimentum vitae mi quis pretium. Donec in libero metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sit amet luctus arcu, non pharetra odio.
                    <br/><br/>
                    Sed commodo quam enim, in maximus leo lacinia sed. Sed elementum malesuada est et ultrices. In vitae semper est. Integer metus dui, auctor id arcu porttitor, faucibus condimentum odio. Vivamus quis urna id quam posuere interdum at at dui. Mauris laoreet dignissim diam sit amet scelerisque. Suspendisse elementum tortor mauris, eu pharetra odio tincidunt ultricies. Pellentesque varius massa ut maximus molestie. Vestibulum mauris erat, placerat eget aliquam non, eleifend non ipsum. Vivamus sit amet iaculis augue. Curabitur ut elit enim. Donec malesuada velit vel lacus elementum convallis.
                    <br/><br/>
                    Nam sit amet eleifend felis. Proin nec auctor lorem. Curabitur elementum eros ut ipsum luctus, convallis fermentum eros pellentesque. Integer ultrices risus sed consectetur elementum. Proin sollicitudin lacinia lacus, nec pharetra purus malesuada in. Donec sapien mauris, aliquam a lorem porta, facilisis dignissim lacus. Suspendisse porta ante dolor, id aliquam ante pharetra non. Phasellus libero risus, varius ut turpis nec, cursus malesuada massa. Sed eu semper risus, vulputate fermentum felis. Integer euismod tincidunt porta. Maecenas tempor magna felis, tristique efficitur augue imperdiet vitae. Proin volutpat finibus orci, ut sodales turpis tincidunt sit amet.
                    <br/><br/>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales libero quis ex mattis, sed pretium eros pretium. Phasellus at elit vel arcu pulvinar egestas non nec augue. Mauris sapien dolor, mattis a tincidunt nec, finibus quis ligula. Nunc euismod fringilla nunc et ullamcorper. Maecenas in elementum mauris, eu tempor lectus. Ut vel ipsum ut sapien convallis dictum ut molestie ipsum. Donec in libero elit. Praesent gravida fringilla eros nec efficitur. In sed ex eu purus imperdiet ullamcorper a a enim. Nam porta neque tincidunt tellus commodo mattis. Nam sodales arcu vitae egestas egestas. Pellentesque condimentum non justo sit amet vestibulum.
                    <br/><br/>
                    Pellentesque condimentum elementum maximus. Phasellus neque erat, gravida sed neque non, imperdiet tincidunt nisi. Nulla viverra nibh in aliquam vulputate. Vivamus tempor viverra ligula vitae fermentum. Donec hendrerit malesuada orci sed scelerisque. Proin quis nibh in leo cursus hendrerit. In ac rhoncus dolor, a auctor tortor. Sed accumsan, risus vitae maximus cursus, turpis sapien mollis odio, vel pulvinar lacus ligula sed sapien. Nunc commodo dui velit. 
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

export default FAQ