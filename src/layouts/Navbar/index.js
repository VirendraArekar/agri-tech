import { FaHome, FaBars, FaDotCircle, FaCubes, FaBoxOpen, FaClipboardList, FaMobileAlt,  FaClipboard, FaFileInvoice, FaInbox, FaCircle, FaUser, FaAngleRight, FaAngleDown} from "react-icons/fa";
const Navbar = (props) => {
    return(
        <nav className="sb-topnav navbar navbar-expand navbar-default bg-default" 
        style={{height : 65,backgroundColor : 'white !important'}}>
            <a className="navbar-brand ps-3  py-sm-4 py-md-4 py-lg-4 link-dark fw-bolder" href="index.html">
                <img src={require('../../assets/images/logo.png')} className="p-sm-2 p-md-2 p-lg-2" style={{width : 60}}/>
                IEFP
            </a>
            <button className="btn  btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!" onClick={(e) => props.toggle(e)}>
                <FaBars />
            </button>
            <form className="d-none d-md-inline-block form-inline me-0 me-md-3 my-2 my-md-0 m-md-4" style={{width: '60%'}}>
                <div className="input-group shadow" style={{borderRadius: 10}}>
                    <input className="form-control form-control-lg border-0"  style={{borderRadius: 10}} type="text" placeholder="Search" aria-label="Search" aria-describedby="btnNavbarSearch" />
                    <button className="btn" id="btnNavbarSearch" type="button"><i className="fas fa-search fa-lg fw-lighter"></i></button>
                </div>
            </form>
            <ul className="navbar-nav collapse navbar-collapse justify-content-end">
                <div className="text-color fw-ligher text-center">
                    <div style={{height : 15}}>John Doe</div>
                    <small  style={{fontSize: 12, color: 'gray'}}>Available</small>
                </div>
                <li className="nav-item dropdown me-3">
                    <a className="nav-link link-secondary dropdown-toggle fw-light text-color" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item text-color fw-light" href="#!">Settings</a></li>
                        <li><a className="dropdown-item text-color fw-light" href="#!">Profile</a></li>
                        <li><a className="dropdown-item text-color fw-light" href="#!">Change Password</a></li>
                        <li><hr className="dropdown-divider text-color fw-light" /></li>
                        <li><a className="dropdown-item text-color fw-light" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;