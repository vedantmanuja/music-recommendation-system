import './styles/LeftNav.css';
import Logo from './images/musical-note.png'
import HomeIcon from './images/home-icon.png'
import SearchIcon from './images/search-icon.png'
import HeartIcon from './images/heart-icon.png'
import MicIcon from './images/mic-icon.png'
import { Link } from 'react-router-dom';

function LeftNav() {
    
    return (
        <>
            <div className="leftNav">
                {/* <img src="https://www.transparentpng.com/thumb/musical-notes/music-note-red-images-clip-art--35.png" alt='' className='logo'></img> */}
                
                <img src={Logo} alt="" className='logo' />
                <div className='nav'>
                    <Link to='/'><img src={HomeIcon} alt="" className='navIcon' /> </Link>
                    <img src={SearchIcon} alt="" className='navIcon' />
                    <Link to='/genrepage/liked-songs'><img src={HeartIcon} alt="" className='navIcon' /></Link>
                    <a href='https://ssoham10-music-classification-app-7worxz.streamlit.app/'><img src={MicIcon} alt="" className='navIcon' /></a>
                </div>
                
            </div>
        
        </>
    )
}

export default LeftNav;