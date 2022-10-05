import { Link } from 'react-router-dom'
import './index.scss';
import homeButton from '../../assets/images/homeButton.png'

const Layout = () => (
<div className='nav-bar'>
    <link className='logo' to='/'>
        <img src={homeButton} alt="homeButton" />

    </link>
    <nav>
        <Navlink exact="true" activeclassname='active' to='/'>
            <FontAwesomeIcon icon = {faHome} color="#8b8b91" />
        </Navlink>

        <Navlink exact="true" activeclassname='active' classname="about-link" to='/about'>
            <FontAwesomeIcon icon = {faUser} color="#8b8b91" />
        </Navlink>

        <Navlink exact="true" activeclassname='active' className="contact-link" to='/contact'>
            <FontAwesomeIcon icon = {faEnvelope} color="#8b8b91" />
        </Navlink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/hayden-carr-a27433227/'>
                <FontAwesomeIcon icon={faLinkedin} color="#8b8b91" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/haydenburger43'>
                <FontAwesomeIcon icon={faGithub} color="#8b8b91" />
            </a>
        </li>
    </ul>
</div>
)

export default Sidebar