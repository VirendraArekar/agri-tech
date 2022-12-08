import { FaHome, FaDotCircle, FaCubes, FaBoxOpen, FaClipboardList, FaMobileAlt,  FaClipboard, FaFileInvoice, FaInbox, FaAngleDown} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
    return(
        <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-light shadow-sm" id="sidenavAccordion" 
                style={{backgroundColor: 'white'}}>
                    <div className="sb-sidenav-menu">
                        <div className="nav mx-3">
                            <div className="sb-sidenav-menu-heading m-0 pt-1" style={{fontSize : 0,height : 0, top : -10}}></div>
                            <Link className="nav-link collapsed text-color bg-grey py-2 fw-light" to="/" >
                                <div className="sb-nav-link-icon">
                                  <FaHome />
                                </div>
                                Dashboard
                            </Link>
                            <Link className="nav-link collapsed mt-2 text-color py-2 fw-light" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon">
                                  <FaDotCircle/>
                                </div>
                                Sliders
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav py-2">
                                    <Link className="nav-link fw-light py-1" to="/sliders">List</Link>
                                    <Link className="nav-link fw-light py-1" to="/slider/add">Add</Link>
                                    <Link className="nav-link fw-light py-1 pb-3" to="/slider/edit/3">Edit</Link>
                                </nav>
                            </div>

                            <Link className="nav-link collapsed mt-2 text-color py-2 fw-light nav-link-active" to="#" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="false" aria-controls="collapseCategory">
                                <div className="sb-nav-link-icon">
                                  <FaCubes />
                                </div>
                                Category
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </Link>
                            <div className="collapse" id="collapseCategory" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav py-2">
                                    <Link className="nav-link fw-light py-1" to="/categories">List</Link>
                                    <Link className="nav-link fw-light py-1" to="/category/add">Add</Link>
                                    <Link className="nav-link fw-light py-1 pb-3" to="/category/edit/3">Edit</Link>
                                </nav>
                            </div>

                            <Link className="nav-link collapsed mt-2 text-color py-2 fw-light nav-link-active" to="#" data-bs-toggle="collapse" data-bs-target="#collapseCategorys" aria-expanded="false" aria-controls="collapseCategorys">
                                <div className="sb-nav-link-icon"><FaCubes /></div>
                                Sub Category
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </Link>
                            <div className="collapse" id="collapseCategorys" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav py-2">
                                    <Link className="nav-link fw-light py-1" to="/sub-categories">List</Link>
                                    <Link className="nav-link fw-light py-1 active-sidebar" to="/sub-category/add">Add</Link>
                                    <Link className="nav-link fw-light py-1 pb-3" to="/sub-category/edit/3">Edit</Link>
                                </nav>
                            </div>


                            <Link className="nav-link collapsed mt-2 text-color py-2 fw-light nav-link-active" to="#" data-bs-toggle="collapse" data-bs-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="sb-nav-link-icon">
                                  <FaBoxOpen />
                                </div>
                                Products
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </Link>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav py-2">
                                    <Link className="nav-link fw-light py-1" to="/products">List</Link>
                                    <Link className="nav-link fw-light py-1" to="/product/add">Add</Link>
                                    <Link className="nav-link fw-light py-1 pb-3" to="/product/edit/3">Edit</Link>
                                </nav>
                            </div>

                            <Link className="nav-link text-color fw-light" to="/orders">
                                <div className="sb-nav-link-icon"><FaClipboardList /></div>
                                <small>Orders</small>
                            </Link>
                            <Link className="nav-link text-color fw-light" to="/app-users">
                                <div className="sb-nav-link-icon"><FaMobileAlt /></div>
                                <small>App Users</small>
                            </Link>
                            <Link className="nav-link text-color fw-light" to="/inventory-management">
                                <div className="sb-nav-link-icon"><FaClipboard /></div>
                                <small>Inventory Management</small>
                            </Link>
                            <Link className="nav-link text-color fw-light" to="/import-export">
                                <div className="sb-nav-link-icon"><FaFileInvoice /></div>
                                <small>Import/Export</small>
                            </Link>
                            <Link className="nav-link text-color fw-light" to="/storage">
                                <div className="sb-nav-link-icon"><FaInbox /></div>
                                <small>Storage</small>
                            </Link>
                        </div>
                    </div>

                </nav>
            </div>
    )
}

export default Sidebar;