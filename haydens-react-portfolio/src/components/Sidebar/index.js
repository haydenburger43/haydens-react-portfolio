import { Link } from 'react-router-dom'
import './index.scss';
import homeButton from '../../assets/images/homeButton.png'

const Layout = () => (
<div className='nav-bar'>
    <link className='logo' to='/'>
        <img src={homeButton} alt="homeButton" />

    </link>
</div>
)

export default Sidebar