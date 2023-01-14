import "./css/Navbar.css"

const Navbar = () => { 

    //Scroll 
    const ClickAbout = () => {  
        //localizamos el elemento (seccion)
        const element = document.getElementById('About')
        //si existe
        if (element) {  //hacemos scroll 
          element.scrollIntoView({behavior:"smooth"})
        }
    }

    const Clickknowledge = () => {  
    const element = document.getElementById('knowledge')
        if (element) {  
            element.scrollIntoView({behavior:"smooth"})
        }
    }

    return ( 
        <div className="Nav">   
            <p className="title">MyProtfolio</p>
            <ul className="Nav__List">    
                <li onClick={()=>ClickAbout()}>About me</li>
                <li onClick={()=>Clickknowledge()}>knowledge</li>
                <li>Experience</li>
                <li>Contact me</li>
            </ul>
        </div>
    );
}

export default Navbar;