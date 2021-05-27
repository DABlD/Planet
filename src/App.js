function App() {
  return (
    <div>
      <div className="container w3-row w3-padding-64">
         <h2 className="w3-text-teal" align="center"><b>The Planets of the Solar System</b></h2><br />

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
             </tr>
          </thead>
          <tbody>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/cmercury.html"> Mercury </a></b></th>
                 <td><b>58</b></td>
                 <td><b>59d</b></td>
                 <td><b>88d</b></td>
                 <td><b>47.9 kM</b></td>
                 <td><b>4868</b></td>
                 <td><b>0</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/dvenus.html"> Venus </a></b></th>
                 <td><b>108</b></td>
                 <td><b>243d</b></td>
                 <td><b>225d</b></td>
                 <td><b>35.0 kM</b></td>
                 <td><b>12112</b></td>
                 <td><b>0</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/eearth.html"> Earth </a></b></th>
                 <td><b>150</b></td>
                 <td><b>23h 56m</b></td>
                 <td><b>365.25d</b></td>
                 <td><b>29.8 kM</b></td>
                 <td><b>12742</b></td>
                 <td><b>1</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/fmars.html"> Mars </a></b></th>
                 <td><b>228</b></td>
                 <td><b>24h 477m 23s</b></td>
                 <td><b>687d</b></td>
                 <td><b>24.1 kM</b></td>
                 <td><b>6800</b></td>
                 <td><b>2</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/gjupiter.html"> Jupiter </a></b></th>
                 <td><b>778</b></td>
                 <td><b>9h 50m</b></td>
                 <td><b>12yr</b></td>
                 <td><b>13.1 kM</b></td>
                 <td><b>143000</b></td>
                 <td><b>13</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/hsaturn.html"> Saturn </a></b></th>
                 <td><b>1427</b></td>
                 <td><b>10h 25m</b></td>
                 <td><b>29.5yr</b></td>
                 <td><b>9.6 kM</b></td>
                 <td><b>121000</b></td>
                 <td><b>10</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/iuranus.html"> Uranus </a></b></th>
                 <td><b>2869</b></td>
                 <td><b>10h 45m</b></td>
                 <td><b>84yr</b></td>
                 <td><b>6.8 kM</b></td>
                 <td><b>47000</b></td>
                 <td><b>5</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/jneptune.html"> Neptune </a></b></th>
                 <td><b>4498</b></td>
                 <td><b>Approx. 16h</b></td>
                 <td><b>165yr</b></td>
                 <td><b>5A kM</b></td>
                 <td><b>45000</b></td>
                 <td><b>2</b></td>
             </tr>
             <tr>
                 <th scope="col"><b> <a href="http://planetwebsite.azurewebsites.net/kpluto.html"> Pluto </a></b></th>
                 <td><b>5900</b></td>
                 <td><b>6A d</b></td>
                 <td><b>248yr</b></td>
                 <td><b>4.7 kM</b></td>
                 <td><b>Approx. 6000</b></td>
                 <td><b>0</b></td>
             </tr>
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
            <a href="http://planetwebsite.azurewebsites.net/cmercury.html">
              <img src="assets/mercury.jpg" className="d-block w-100"/>
            </a>
          </div>

          <div className="carousel-item">
            <a href="http://planetwebsite.azurewebsites.net/gjupiter.html">
              <img src="assets/jupiter.jpg" className="d-block w-100"/>
            </a>
          </div>

          <div className="carousel-item">
            <a href="http://planetwebsite.azurewebsites.net/hsaturn.html">
              <img src="assets/saturn.jpg" className="d-block w-100"/>
            </a>
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
  );
}

export default App;
