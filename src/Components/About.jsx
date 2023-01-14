import './css/About.css'
import Rana from '../images/developweb.gif'


const About = () => {
  return (
    <div id='About' className="About">
      <img className='AboutGif' alt='imagen' src={Rana} />
      <p>Web developer with knowledge of HTML5 and CSS3,<br /> structuring and design of web sites and pages,<br /> using flexbox and grid, Basic knowledge of<br /> programming with JavaScript and Reactjs, Api Res,<br /> Experience uploading simple projects to github.<br /> Basic knowledge of MySQL database,<br /> NodeJS Express server.</p>
    </div>
  );
};

export default About;
