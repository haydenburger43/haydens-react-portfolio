import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import homeButton from '../../assets/images/homeButton.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={homeButton} alt="homeButton" />

    </Link>
    <nav>
        <NavLink exact="true" activeclassname='active' to='/'>
            <FontAwesomeIcon icon = {faHome} color="#8b8b91" />
        </NavLink>

        <NavLink exact="true" activeclassname='active' classname="about-link" to='/about'>
            <FontAwesomeIcon icon = {faUser} color="#8b8b91" />
        </NavLink>

        <NavLink exact="true" activeclassname='active' className="contact-link" to='/contact'>
            <FontAwesomeIcon icon = {faEnvelope} color="#8b8b91" />
        </NavLink>
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