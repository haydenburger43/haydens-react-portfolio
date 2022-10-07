import { Link } from 'react-router-dom';
import './index.scss';


const home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>hi, im hayden
                web developer
                </h1>
                <h2>full stack web developer</h2>
                <Link to="/contact" className="flat-button">contact me</Link>
            </div>
        </div>
    );
}

export default home