import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
const Logo = () => {
    return (
        <Link to="/">
            <img className='hidden md:block' width="100" height="100" src={logo} alt="" />

        </Link>

    );
};

export default Logo;