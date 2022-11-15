import "./Layout.scss"
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='header-container'>
      <div className='header-container__title'>Weather-API</div>
      <div className='header-container__profile'>
        <img src="." alt="user" />
        _username
      </div>
      <nav>
        <ul className='header-container__lists'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="">Courses</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className='mainPage-container'>
      <Outlet/>
    </div>
    </>
  )
}

export default Layout