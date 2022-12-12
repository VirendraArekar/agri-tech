import BreadCrumb from "../../components/BreadCrumb";
import DataTable from 'react-data-table-component';
import { formatSlashDate, numberWithCommas } from "../../utils";
import './style.css'
import React from "react";
import {FaArrowUp , FaArrowDown} from 'react-icons/fa'
import Title from '../../components/Title'
import { Link } from "react-router-dom";
const ImportExport = (props) =>{
    Title('Import Export')
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Product</h6>,
            selector: row => <div>
                               <img src={require('../../assets/images/product.png')}  style={{width : 50}} alt="import view"/>
                               <div style={{fontSize : 14, fontWeight : 500, color :'#303030'}} className="d-inline-block mx-2">Mustard</div>
                             </div>,
            style:{
                paddingTop : 20, paddingBottom : 20
            },
            width : '160px'
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Date</h6>,
            selector: row => <div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>{formatSlashDate(row.createdAt)}</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Category</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>{row.category.name}</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Country</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>
                <Link to="#" className="text-decoration-none">India</Link>
            </div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Price</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>{numberWithCommas(row.price)}/KG</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Volume</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>253kg</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Supplier</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>
                                <Link to="#" className="text-decoration-none">LKL Services</Link>
                            </div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Additional Services</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>Air, Land, Sea, Transport</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Status</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>Exported</div>,
        },
    ];
    
    const data = [
        {
            id: 1,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 2,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 3,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 4,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 5,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 6,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 7,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 8,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 9,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 10,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 11,
            name: 'Seasonal Fruit',
            code : 'CO1234',
            category : {
                name : 'Fruit',
            },
            price : 1500,
            quantity : 25,
            inventory : 25,
            createdAt: '2021-10-13T12:05:45Z',
        },
        
    ]


    const rowDisabledCriteria = row => row.id = 2;

    const rowSelectCriteria = row => row.id > 6;

    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    // Toggle the state so React Data Table changes to clearSelectedRows are triggered
    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    }

    return(
        <div className="container-fluid py-sm-4 py-md-4 py-lg-4">
            <BreadCrumb 
              title="Import Export"
              subTitle="Report"
              icon="FaBoxOpen"
            />

            <div className="row my-5">
               <div className="col-8">
                 <div className="shadow p-3 rounded-3" style={{backgroundColor : 'white'}}>
                    <h6>Import / Export Graph</h6>
                    <div className="d-inline-block mt-1">
                       <span className="d-block" style={{fontSize : 10, height : 10, color : 'gray'}}>This Month</span>
                       <span className="d-block" style={{fontSize : 22, color : '#1FB471'}}>
                           $86,589
                       </span>
                    </div>
                    <div className="d-inline-block mx-3 mt-1">
                       <span className="d-block" style={{fontSize : 10, height : 10, color : 'gray'}}>Last Month</span>
                       <span className="d-block" style={{fontSize : 22, color : '#1FB471'}}>
                           $86,589
                       </span>
                    </div>
                 </div>
               </div>
               <div className="col-4">
                 <div className="shadow p-3 rounded-3" style={{backgroundColor : 'white'}}>
                  <h6 className="fw-normal p-0 m-0 mb-2" style={{height : 12}}>Country wise statistics</h6>
                  <div className="m-0 p-0">
                    <div style={{fontSize : 12, height : 14}} className="p-0 m-0 fw-normal mt-2">United Kingdom
                      <span className="float-end">800
                        <FaArrowUp className="text-success fst-normal ms-1"/>
                      </span>
                    </div>
                    <div style={{fontSize : 14, height : 16}} className="p-0 m-0 fw-normal mt-2">73%
                      <span className="float-end"  style={{color : 'lightgray', fontSize : 12}}>13:16</span>
                    </div>

                    <div className="progress my-2" style={{ height : 5}}>
                        <div className="progress-bar bg-voilet" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="m-0 p-0">
                    <div style={{fontSize : 12, height : 14}} className="p-0 m-0 fw-normal mt-2">Ireland
                      <span className="float-end">-200
                        <FaArrowDown className="text-danger fst-normal ms-1"/>
                      </span>
                    </div>
                    <div style={{fontSize : 14, height : 16}} className="p-0 m-0 fw-normal mt-2">3%
                      <span className="float-end"  style={{color : 'lightgray', fontSize : 12}}>13:16</span>
                    </div>
                    <div className="progress my-2" style={{ height : 5}}>
                        <div className="progress-bar bg-voilet" role="progressbar" style={{width: '3%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>


                  <div className="m-0 p-0">
                    <div style={{fontSize : 12, height : 14}} className="p-0 m-0 fw-normal mt-2">Qatar
                      <span className="float-end">100
                        <FaArrowUp className="text-success fst-normal ms-1"/>
                      </span>
                    </div>
                    <div style={{fontSize : 14, height : 16}} className="p-0 m-0 fw-normal mt-2">19%
                      <span className="float-end"  style={{color : 'lightgray', fontSize : 12}}>13:16</span>
                    </div>
                    <div className="progress my-2" style={{ height : 5}}>
                        <div className="progress-bar bg-voilet" role="progressbar" style={{width: '19%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  {/* FaArrowUp */}
                  <div className="m-0 p-0">
                    <div style={{fontSize : 12, height : 14}} className="p-0 m-0 fw-normal mt-2">Kuwait
                      <span className="float-end">-450
                        <FaArrowDown className="text-danger fst-normal ms-1"/>
                      </span>
                    </div>
                    <div style={{fontSize : 14, height : 16}} className="p-0 m-0 fw-normal mt-2">27%
                      <span className="float-end"  style={{color : 'lightgray', fontSize : 12}}>13:16</span>
                    </div>
                    <div className="progress my-2" style={{ height : 5}}>
                        <div className="progress-bar bg-voilet" role="progressbar" style={{width: '27%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                 </div>
               </div>
            </div>
            <h5>Report</h5>

            <div className="mt-4 py-4 mb-4">
                <small className="text-color fw-bolder">Show</small>
                <select className="mx-2" style={{width : 50}}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <small className="text-color fw-bolder">entries</small>

                <div className="float-end">
                  <button className="btn btn-md btn-green rounded-3 me-3">Download Data</button>
                </div>
            </div>
            <div className="w-100 shadow rounded-3">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    selectableRows
                    expandableRowsComponent={ExpandedComponent}
                    onSelectedRowsChange={handleChange}
                    clearSelectedRows={toggledClearRows}
                    // selectableRowSelected={rowSelectCriteria}
                    // selectableRowDisabled={rowDisabledCriteria}
                />
            </div>
        </div>
    )
}


export default ImportExport;