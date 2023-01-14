import "./css/Home.css"
import FotoPerfil from "../images/Fotoperfil.png"

const Home = () => {    
    return ( 
        <div id="Home" className="Home">
            
            <div className="Home_P_H1">   
                <p className="Home__p">I Am Maicol Barrera</p>
                <h1 className="Home__H1">Frontend Developer</h1>
            </div>

            <div>   
                <img className="Foto" alt="imagen" src={FotoPerfil} />
            </div>
        </div>  
    );
}

export default Home