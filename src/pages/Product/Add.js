import BreadCrumb from "../../components/BreadCrumb";
import {FaAngleDown} from 'react-icons/fa'
import './style.css'
import Title from '../../components/Title'
const Add = (props) =>{
    Title('Add Product')
    return(
        <div className="container-fluid py-sm-4 py-md-4 py-lg-4">
            <BreadCrumb 
              title="Add Product"
              subTitle="Product"
              icon="FaBoxOpen"
            />

            <div className="w-100 bg-white shadow rounded-3 mt-5">
                <h4 className="px-4 pt-4 mx-2 pb-3">Add Product</h4>
                <hr className="hr" />
                <div className="p-4 pt-3 mx-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <h5 htmlFor="productName" className="pb-2">Name</h5>
                                <input type="text" className="form-control form-control-lg " id="productName" aria-describedby="nameHelp" placeholder="Enter Product Name" style={{ fontSize : 17}} />
                                {/* <small id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <h5 htmlFor="categoryCode" className="pb-2">Code</h5>
                                <input type="text" className="form-control form-control-lg " id="categoryCode" aria-describedby="codeHelp" placeholder="Enter Category Code" style={{ fontSize : 17}}/>
                                {/* <small id="codeHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3" style={{position :'relative'}}>
                                <h5 htmlFor="categoryName" className="pb-2">Category</h5>
                                <select  className="form-control form-control-lg rounded-3" id="categoryName" aria-describedby="categoryHelp" placeholder="Enter Category Name" style={{ fontSize : 17}}>
                                    <option>Select Category</option>
                                    <option>Category 1</option>
                                </select>
                                <FaAngleDown  style={{position : 'absolute', right : 10, bottom : 15, color : 'grey'}}/>

                                {/* <small id="categoryHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3" style={{position :'relative'}}>
                                <h5 htmlFor="subcategoryName" className="pb-2">Sub-Category</h5>
                                <select  className="form-control form-control-lg rounded-3" id="subcategoryName" aria-describedby="subcategoryHelp" placeholder="Enter Category Name" style={{ fontSize : 17}}>
                                    <option>Select Category</option>
                                    <option>Category 1</option>
                                </select>
                                <FaAngleDown  style={{position : 'absolute', right : 10, bottom : 15, color : 'grey'}}/>
                                {/* <small id="subcategoryHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group mt-3">
                                <h5 htmlFor="productName" className="pb-2">Price</h5>
                                <input type="text" className="form-control form-control-lg " id="productName" aria-describedby="nameHelp" placeholder="Enter Product Name" style={{ fontSize : 17}} />
                                {/* <small id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group mt-3">
                                <h5 htmlFor="productName" className="pb-2">Quantity</h5>
                                <input type="text" className="form-control form-control-lg " id="productName" aria-describedby="nameHelp" placeholder="Enter Product Name" style={{ fontSize : 17}} />
                                {/* <small id="nameHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <h5 htmlFor="categoryCode" className="pb-2">Inventory (In Stock)</h5>
                                <input type="text" className="form-control form-control-lg " id="categoryCode" aria-describedby="codeHelp" placeholder="Enter Category Code" style={{ fontSize : 17}}/>
                                {/* <small id="codeHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group mt-3">
                                <h5 htmlFor="imageInput" className="pb-2">Image</h5>
                                <input type="file" className="form-control form-control-lg" id="imageInput" aria-describedby="imageHelp" placeholder="Select image" style={{ fontSize : 17}}/>
                                {/* <small id="imageHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group mt-3">
                                <h5 htmlFor="imageInput" className="pb-2">Image</h5>
                                <textarea className="form-control form-control-lg" id="imageInput"  rows={5}   aria-describedby="imageHelp" placeholder="Select image" style={{ fontSize : 17}}></textarea>
                                {/* <small id="imageHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                    </div>
                    <div className="my-4 mt-5">
                       <button className="btn btn-md btn-green rounded-3 me-3">Add Product</button>
                       <button className="btn btn-md btn-secondary rounded-3">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Add;