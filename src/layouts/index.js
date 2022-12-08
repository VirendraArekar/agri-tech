
import './style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { FaHome, FaBars, FaDotCircle, FaCubes, FaBoxOpen, FaClipboardList, FaMobileAlt,  FaClipboard, FaFileInvoice, FaInbox, FaCircle, FaUser, FaAngleRight, FaAngleDown} from "react-icons/fa";
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layouts = (props) => {

const toggle = async(e) => {
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      await sidebarToggle.addEventListener('click', async(event) => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          await localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
  }
}
  return (
      <>
        <Navbar toggle={toggle}/>
        <div id="layoutSidenav">
            <Sidebar />
            <div id="layoutSidenav_content">
                <main style={{backgroundColor: '#F5F5F5'}} className="w-100 h-100">
                    <div className="container-fluid px-4" >
                       {props.children}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}

export default Layouts;
