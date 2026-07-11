import "./css/Home.css"
import FotoPerfil from "../images/Fotoperfil.jpg"

const Home = () => { 
    return ( 
        <div id="Home" className="Home">
            <div className="Home_P_H1">   
                <p className="Home__p">Soy Maicol Barrera</p>
                <h1 className="Home__H1">FullStack Developer</h1>
            </div>
            <div>   
                <img className="Foto" alt="imagen" src={FotoPerfil} />
            </div>
        </div>  
    );
}

export default Home