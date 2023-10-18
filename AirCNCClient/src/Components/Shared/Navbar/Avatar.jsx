import { useContext } from 'react';
import placeholder from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user} = useContext(AuthContext);
    return (
        <img width="30" className='rounded-full' height="30" src={user && user.photoURL?user.photoURL:placeholder} alt="" />
    );
};

export default Avatar;