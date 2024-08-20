import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <hr />
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#destacados">Paises Destacados</a>
        </li>
        <hr />
        <li class="nav-item">
          <a class="nav-link" href="#momentos">Momentos a Destacar</a>
        </li>
        <hr />
        <li class="nav-item">
          <a class="nav-link" href="#participantes">Participantes a Destacar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr />
<div class="card text-bg-dark">
  <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/08/08/16284558873970.jpg" class="card-img" alt=""/>
  <div class="card-img-overlay">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <p class="card-text"><small></small></p>
  </div>
</div>
<hr />
<div class="juegos"></div>
<div class="clearfix">
  <img src="https://seeklogo.com/images/A/aros-olimpicos-logo-64D297E9FD-seeklogo.com.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="" />

  <p>
    <h5>¿Que son los juegos olimpicos?</h5>
  </p>

  <p>
  Los Juegos Olímpicos son un evento internacional que se celebra cada cuatro años, reuniendo a atletas de todo el mundo para competir en diversas disciplinas deportivas. Originaron en la antigua Grecia, específicamente en la ciudad de Olimpia, alrededor del año 776 a.C. Eran parte de un festival religioso en honor al dios Zeus. Los Juegos antiguos duraron hasta aproximadamente el siglo IV d.C., cuando fueron prohibidos por el emperador romano Teodosio I.
  </p> 

  <p>
  Los Juegos Olímpicos modernos fueron revividos en 1896 por Pierre de Coubertin, un educador francés que quería promover el intercambio cultural y la paz a través del deporte. Desde entonces, han crecido enormemente en popularidad y en la cantidad de deportes y países participantes.
  </p>

  <details> 
    <summary>Caracteristicas De Los Juegos Olimpicos</summary>
    <p>°1 Ceremonias: Se llevan a cabo una ceremonia de apertura y una ceremonia de clausura. La ceremonia de apertura incluye el desfile de atletas, donde cada país tiene su propia delegación.</p>
    <p>°2 Deportes: Los Juegos cuentan con una amplia variedad de deportes, que pueden incluir desde atletismo y natación, hasta deportes de equipo como el baloncesto y el fútbol. Cada edición puede ver la inclusión de nuevos deportes.</p>
    <p>°3 Medallas: Los atletas compiten por medallas de oro, plata y bronce, que se otorgan a los tres primeros clasificados en cada evento.</p>
    <p>°4 Paz y Unidad: Los Juegos Olímpicos promueven valores como la amistad, el respeto y la excelencia. Se espera que los atletas compitan en un espíritu de paz y unidad, independientemente de las diferencias culturales o políticas.</p>
    <p>°5 Efecto Global: Los Juegos son un evento que capta la atención de millones de personas en todo el mundo y tienen un gran impacto económico y cultural en el país anfitrión.</p>
</details>
</div>
<hr />
<h1 class="destacados" id="destacados">Paises Destacados</h1>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="	https://cdn.gigantes.com/wp-content/uploads/2021/08/image-2-e1694445282718.jpg" class="d-block w-100" alt="EE.UU"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="texto">Estados Unidos</h5>
        <p class="texto">Destacado en Atletismo y Gimnasia Artistica</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://newses.cgtn.com/n/BfJEA-CAA-EcA/BJdcBIA.jpg" class="d-block w-100" alt="China"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="texto">china</h5>
        <p class="texto">Destacado en Gimnasia Artisticay y natacion</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.elespectador.com/resizer/v2/5CQMLGO25NB35BAOI5HJRZSA4M.jpg?auth=cf9df3501e6ef5cf2aa258f803c984bc6c08ff14cb69dcff4e5465bb2651cc6a&width=920&height=613&smart=true&quality=60" class="d-block w-100" alt="Japon"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="texto" >Japon</h5>
        <p class="texto">Destacado en Gimnasia Artisticay y Lucha</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr />
<h1 class="destacados" id="momentos">Momento Epico</h1>

<div class="juegos"></div>
<div class="clearfix">
  <img src="https://eltabloide.com.co/wp-content/uploads/2024/08/Anthony-Ammirati.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="" />

  <p><h5>
  Anthony Ammirati, el atleta que perdió en los Juegos Olímpicos; sus atributos le jugaron una mala pasada
  </h5></p> 

  <p>
  Anthony Ammirati es un reconocido deportista francés, de 21 años, que tenía grandes aspiraciones de pelear por una medalla. Sin embargo, las cosas no le salieron como esperaba. El atleta estaba en competencia en búsqueda de su clasificación, pero en uno de los saltos sus partes íntimas tocaron el listón cuando ya parecía que lo superaba y hacen que se caiga, por lo que no pudo superar su salto.
  </p>

  <p>
  En los Juegos Olímpicos hay muchas pruebas en las que todo depende de los centímetros. En el tiro con arco se trata de acercarse lo más posible a la diana, en la gimnasia un centímetro de error puede provocar una mala caída, y en las pruebas de atletismo, como el lanzamiento de peso y de jabalina, todo se decide por un mínimo margen.
  </p>
</div>

<hr />
<h1 class="destacados" id="participantes">Participantes a Destacar</h1>
<div class="juegos"></div>
<div class="clearfix">
  <img src="https://s.t13.cl/sites/default/files/styles/manualcrop_850x475/public/t13/field-imagen/2024-08/tirador-turco-paris2025_0.PNG.jpeg?itok=Eps9E7LN" class="col-md-6 float-md-end mb-3 ms-md-3" alt="" />

  <p>
  <h5>Yusuf Dikeç, el subcampeón olímpico en París 2024 en tiro que ganó fama mundial al hacerse viral en redes sociales, con imágenes disparando con una mano en el bolsillo, sin gafas de protección ni casco.</h5>
  </p> 

  <p>
  La modestia es un rasgo del carácter del turco Yusuf Dikeç, el subcampeón olímpico en París 2024 en tiro que ganó fama mundial al hacerse viral en redes sociales, con imágenes disparando con una mano en el bolsillo, sin gafas de protección ni casco.
  </p>

  <p>
  Su postura relajada, con aparente dejadez, se convirtió en un símbolo de victoria y varios deportistas de los Juegos Olímpicos le han imitado tras ganar una medalla, especialmente el sueco Armand Duplantis tras lograr el oro con nuevo récord mundial en el salto con garrocha. 
  </p>
</div>
    </>
  )
}

export default App
