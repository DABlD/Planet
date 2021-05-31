import React, { useEffect, useState }  from 'react'
import axios from 'axios'

const URL = "http://localhost:51578/api/Planet";

const SolarSystem = () => {

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
                    <h1 className="w3-text-teal"><b>Our Solar System</b></h1>
                    <p style={{ color:"white", "textAlign":"justify" }}>
                        <b>Why Is It Called The "Solar" System?</b> <br />
                        There are many planetary systems like ours in the universe, with planets orbiting a host star.
                        Our planetary system is named the "solar" system because our Sun is named Sol, after the Latin word for Sun, "solis," and anything related to the Sun we call "solar." <br />
                        The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy. <br />
                        Our solar system consists of our star, the Sun, and everything bound to it by gravity — the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune, dwarf planets such as Pluto, dozens of moons and millions of asteroids, comets and meteoroids. <br />
                        Beyond our own solar system, there are more planets than stars in night sky. So far, we have discovered thousands of planetary systems orbiting other stars in the Milky Way, with more planets being found all the time. Most of the hundreds of billions of stars in our galaxy are thought to have planets of their own, and the Milky Way is but one of perhaps 100 billion galaxies in the universe. <br />
                        While our planet is in some ways a mere speck in the vast cosmos, we have a lot of company out there. It seems that we live in a universe packed with planets — a web of countless stars accompanied by families of objects, perhaps some with life of their own.
                    </p>
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Size and Distance</b></h1>
                    <p style={{ color:"white", "textAlign":"justify" }}>
                        Our solar system extends much farther than the eight planets that orbit the Sun. The solar system also includes the Kuiper Belt that lies past Neptune's orbit. This is a sparsely occupied ring of icy bodies, almost all smaller than the most popular Kuiper Belt Object, dwarf planet Pluto. <br />
                        And beyond the fringes of the Kuiper belt is the Oort Cloud. This giant spherical shell surrounds our solar system. It has never been directly observed, but its existence is predicted based on mathematical models and observations of comets that likely originate there. <br />
                        The Oort Cloud is made of icy pieces of space debris the sizes of mountains and sometimes larger, orbiting our Sun as far as 1.6 light years away. This shell of material is thick, extending from 5,000 astronomical units to 100,000 astronomical units. One astronomical unit (or AU) is the distance from the Sun to Earth, or about 93 million miles (150 million kilometers). The Oort Cloud is the boundary of the Sun's gravitational influence, where orbiting objects can turn around and return closer to our Sun. <br />
                        The Sun's heliosphere doesn't extend quite as far. The heliosphere is the bubble created by the solar wind—a stream of electrically charged gas blowing outward from the Sun in all directions. The boundary where the solar wind is abruptly slowed by pressure from interstellar gases is called the termination shock. This edge occurs between 80-100 astronomical units. <br />
                        Two NASA spacecraft, launched in 1977, have crossed the termination shock: Voyager 1 in 2004 and Voyager 2 in 2007. But it will be many thousands of years before the two Voyagers exit the Oort Cloud.
                    </p>
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Formation</b></h1>
                    <p style={{ color:"white", "textAlign":"justify" }}>
                        Our solar system formed about 4.5 billion years ago from a dense cloud of interstellar gas and dust. The cloud collapsed, possibly due to the shockwave of a nearby exploding star, called a supernova. When this dust cloud collapsed, it formed a solar nebula—a spinning, swirling disk of material. <br />
                        At the center, gravity pulled more and more material in. Eventually the pressure in the core was so great that hydrogen atoms began to combine and form helium, releasing a tremendous amount of energy. With that, our Sun was born, and it eventually amassed more than 99 percent of the available matter. <br />
                        Matter farther out in the disk was also clumping together. These clumps smashed into one another, forming larger and larger objects. Some of them grew big enough for their gravity to shape them into spheres, becoming planets, dwarf planets and large moons. In other cases, planets did not form: the asteroid belt is made of bits and pieces of the early solar system that could never quite come together into a planet. Other smaller leftover pieces became asteroids, comets, meteoroids, and small, irregular moons.
                    </p>
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal"><b>Structure</b></h1>
                    <p style={{ color:"white", "textAlign":"justify" }}>
                        The order and arrangement of the planets and other bodies in our solar system is due to the way the solar system formed. Nearest the Sun, only rocky material could withstand the heat when the solar system was young. For this reason, the first four planets—Mercury, Venus, Earth and Mars—are terrestrial planets. They're small with solid, rocky surfaces. <br />
                        Meanwhile, materials we are used to seeing as ice, liquid or gas settled in the outer regions of the young solar system. Gravity pulled these materials together, and that is where we find gas giants Jupiter and Saturn and ice giants Uranus and Neptune.
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

export default SolarSystem