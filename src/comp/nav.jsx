import { MdLocalShipping, MdLogin } from 'react-icons/md';
import { CiLogout, CiSearch } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css"
import { FaRegUser } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

const Nav = ({ search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="header">
        <div className="top_header">
            <div className="icon">
            <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Shipping when Shopping upto $1000</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='image/logo.webp' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type="text" value={search} placeholder='search' onChange={(e) =>setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><CiSearch /></button>
            </div>
            {
                isAuthenticated ?
                // if user is login then logout button will shown and also user profile//
             <div className='user'>
                <div className='icon'>
                <CiLogout />
                </div>
                <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            //if user is not then Login button will shown//
            <div className='user'>
                <div className='icon'>
                <MdLogin />
                </div>
                <div className='btn'>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
        </div>
        <div className='last_header'>
            <div className='user_profile'>
                {
                    //user profile will shown here
                    isAuthenticated ? 
                    <>
                    <div className='icon'>
                    <FaRegUser />
                    </div>
                    <div className='info'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className='icon'>
                       <FaRegUser />
                    </div>
                    <div className='info'>
                        <p>Please Login</p>
                    </div>
                    </>
                }
            </div>
            <div className='nav'>
                <ul>
                    <li><NavLink to={'/'} className='Link'>Home</NavLink></li>
                    <li><NavLink to={'/shop'} className='Link'>Shop</NavLink></li>
                    <li><NavLink to={'/cart'} className='Link'>Cart</NavLink></li>
                    <li><NavLink to={'/about'} className='Link'>About</NavLink></li>
                    <li><NavLink to={'/contact'} className='Link'>Contact</NavLink></li>
                </ul>
            </div>
            <div className='offer'>
                <p>flat 10% over all iphone </p>
            </div>
        </div>
    </div>
    </>
  )
}
export default Nav;
