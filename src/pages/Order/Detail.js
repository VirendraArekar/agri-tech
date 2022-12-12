import BreadCrumb from "../../components/BreadCrumb";
import {BsFillCircleFill} from 'react-icons/bs'
import './style.css'
import Title from '../../components/Title'

const Detail = (props) =>{
    Title('Order Detail')
    return(
        <div className="container-fluid py-sm-4 py-md-4 py-lg-4">
            <BreadCrumb 
              title="Order Details"
              subTitle="Order"
              icon="FaClipboardList"
            />

            <div className="mt-4 py-4 mb-2">
                <div className="float-end">
                  <button className="btn btn-md btn-green rounded-3 me-3">Download Invoice</button>
                </div>
            </div>

            <div className="row mt-4 py-4">
               <div className="col-5">
                  <div className="shadow py-4 bg-white rounded-3">
                     <h5 className="px-4">Order Details</h5>
                     <hr className="hr"  style={{color : 'lightgrey', height : 2}}/>
                     <div className="px-4">
                       <div className="row" >
                          <div className="col-6">
                            <h6 className='box-title py-2' >ID</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >79052242</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Date</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >13/06/2022 10.59AM</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Invoice No.</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >IN-642974</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Payment Method</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >UPI</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Status</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >
                                <span className="text-success fw-bold align-middle" style={{fontSize : 14}}>
                                    <BsFillCircleFill />{" "}
                                    Completed
                                </span>
                             </h6>
                          </div>
                       </div>
                     </div>
                  </div>
               </div>
               <div className="col-7">
                  <div className="w-100 shadow rounded-3 py-4 bg-white">
                    <div className="row px-4">
                        <div className="col-4">
                            <h5>Product</h5>
                        </div>
                        <div className="col-3">
                            <h5>Code</h5>
                        </div>
                        <div className="col-3">
                            <h5>Quantity</h5>
                        </div>
                        <div className="col-2">
                            <h5>Price</h5>
                        </div>
                    </div>
                    <hr className="hr"  style={{color : 'lightgrey', height : 2}}/>
                    <div className="row px-4">
                        <div className="col-4">
                           <h6 className='box-title py-2' >
                              <img src={require('../../assets/images/product.png')}  style={{width : 60}} className="mx-2" alt="order 567"/>
                              Corn
                           </h6>
                        </div>
                        <div className="col-3">
                           <h6 className='box-title py-2' >CO742235</h6>
                        </div>
                        <div className="col-3">
                           <h6 className='box-title py-2' >2 KG</h6>
                        </div>
                        <div className="col-2">
                           <h6 className='box-title py-2' >1,500/KG</h6>
                        </div>
                    </div>
                    <hr className="hr"  style={{color : 'lightgrey', height : 2}}/>
                    <div className="row px-4">
                        <div className="col-4">
                           <h6 className='box-title py-2' >
                              <img src={require('../../assets/images/product.png')}  style={{width : 60}} className="mx-2" alt="order 678"/>
                              Corn
                           </h6>
                        </div>
                        <div className="col-3">
                           <h6 className='box-title py-2' >CO742235</h6>
                        </div>
                        <div className="col-3">
                           <h6 className='box-title py-2' >2 KG</h6>
                        </div>
                        <div className="col-2">
                           <h6 className='box-title py-2' >1,500/KG</h6>
                        </div>
                    </div>
                    <hr className="hr"  style={{color : 'lightgrey', height : 2}}/>
                    <div className="row px-4">
                        <div className="col-4">
                           
                        </div>
                        <div className="col-3">
                          
                        </div>
                        <div className="col-3">
                           <h6 className='box-title' >Total</h6>
                        </div>
                        <div className="col-2">
                           <h6 className='box-title' >15,000</h6>
                        </div>
                    </div>

                  </div>
               </div>
               <div className="col-5 mt-1">
                  <div className="shadow py-4 bg-white rounded-3">
                     <h5 className="px-4">Customer Details</h5>
                     <hr className="hr"  style={{color : 'lightgrey', height : 2}}/>
                     <div className="px-4">
                       <div className="row" >
                          <div className="col-6">
                            <h6 className='box-title py-2' >Name</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >Virendra Arekar</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Email</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >virendra.arekar@gmail.com</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >Mobile</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >+91-8483988837</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >District / City</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >Mumbai</h6>
                          </div>
                          <div className="col-6">
                            <h6 className='box-title py-2' >State</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >Maharashtra</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >Address</h6>
                          </div>
                          <div className="col-6">
                             <h6 className='box-title py-2' >At New Popharan, Post - Akkarpatti, Dist & Tal Palghar</h6>
                          </div>
            
                       </div>
                     </div>
                  </div>
               </div>
            </div>
          
           
        </div>
    )
}


export default Detail;