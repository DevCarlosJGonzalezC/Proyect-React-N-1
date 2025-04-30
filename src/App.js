import './App.css';
import Hijos from './componentes/hijos';
import Footer from './componentes/footer';
import NavBar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <NavBar
      
      />
      <h1 className='hijosCarlos'>Hijos de Carlos Jose Gonzalez Castellanos</h1>
      <Hijos
      imagen ="jose"
      nombre= "Jose Jhoel Gonzalez Natera"
      edad = "9"
      colegio = "Colegio Carmelitano - 4°" 
      descripcion= {<>Mi hijo mayor, <strong>Jose Jhoel,</strong> tiene 9 años y es un apasionado por los video juegos y el futbol. Le encanta compartir con sus familia y comer helado. Es curioso, inperaactivo responsable y siempre está dispuesto a ayudar en casa.</>}
      />
      <Hijos
      imagen ="luciana"
      nombre= "Luciana Gonzalez Natera"
      edad = "6"
      colegio = "Colegio Carmelitano - 2°" 
      descripcion= {<>Luciana, la del medio, tiene 6 años y es la <strong>deportista</strong> de la familia. Disfruta patinar, bailar y contar historias. Tiene una <strong>imaginación increíble y un corazón muy generoso.</strong></>}
      />
      <Hijos
      imagen ="isa"
      nombre= "Elias Jose Gonzalez Baldiris"
      edad = "6"
      colegio = "Colegio Carmelitano - 1°" 
      descripcion= {<>El pequeño Elias Jose, de 5 años, es una bola de energía. Le gusta correr, trepar y descubrir cosas nuevas. Aunque es travieso, siempre logra sacar una sonrisa con sus ocurrencias.</>}
      />

      <Footer
      escuela1 = "Escuela General francisco de paula santander"
      escuela2 = {<>Servicio nacional de aprendizaje <strong>SENA.</strong> </>}
      escuela3 = "Sistem Center"
      profesion1 = "Administrador Policial"
      profesion2 = "Desarrollador de Software"
      profesion3 = "Analista y progragrador de sistemas"
        creador ="Carlos J. Gonzalez Castellanos."
      />
    </div>
  );
}

export default App;
