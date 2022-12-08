import BreadCrumb from "../../components/BreadCrumb";
import {FaAngleDown} from 'react-icons/fa'
import DataTable from 'react-data-table-component';
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
import { formatSlashDate, numberWithCommas } from "../../utils";
import './style.css'
import React from "react";
import {FaArrowUp , FaArrowDown, FaBoxOpen} from 'react-icons/fa'
import {BsCurrencyDollar, BsClockHistory} from 'react-icons/bs'
import {FiShoppingBag} from 'react-icons/fi'
const Storage = (props) =>{
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Product</h6>,
            selector: row => <div>
                               <img src={require('../../assets/images/product.png')}  style={{width : 50}}/>
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
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Duration (Days/Hrs)</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>
                180 Days
            </div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Available Capacity</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>3000 MT</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Additional Services</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>Air, Land, Sea, Transport</div>,
        },
        {
            name: <h6 style={{paddingTop : 20, paddingBottom : 20, fontSize : 16}}>Paid</h6>,
            selector: row =><div style={{fontSize : 14, fontWeight : 500, color :'#303030'}}>56,451</div>,
        }
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
              title="Storage"
              subTitle="Report"
              icon="FaInbox"
            />

            <div className="row my-5">
               <div className="col-3">
                 <div className="shadow p-3 rounded-3 py-4" style={{backgroundColor : 'white'}}>
                    <span className="rounded-5 p-2 align-middle mx-2" style={{backgroundColor : '#D5D1FB',}}>
                        <FaBoxOpen style={{color : '#8478F3', fontSize : 18, marginLeft : 3, marginRight : 3, marginBottom : 5}}/>
                    </span>
                    <div className="px-2 mt-4">
                        <h5 style={{fontSize : 20, height : 12, position :'relative'}}>48K <span style={{fontSize : 14,  position :'absolute', top : 1}}>Ton</span></h5>
                        <span style={{fontSize : 12, height : 12}}>Storage Used</span>
                    </div>
                 </div>
               </div>
               <div className="col-3">
                 <div className="shadow p-3 rounded-3 py-4" style={{backgroundColor : 'white'}}>
                    <span className="rounded-5 p-2 align-middle mx-2" style={{backgroundColor : '#E6F7EE',}}>
                        <BsCurrencyDollar style={{color : '#2DCD7A', fontSize : 18, marginLeft : 3, marginRight : 3, marginBottom : 5}}/>
                    </span>
                    <div className="px-2 mt-4">
                        <h5 style={{fontSize : 20, height : 12, position :'relative'}}>97.5K</h5>
                        <span style={{fontSize : 12, height : 12}}>Revenue Generated</span>
                    </div>
                 </div>
               </div>
               <div className="col-3">
                 <div className="shadow p-3 rounded-3 py-4" style={{backgroundColor : 'white'}}>
                    <span className="rounded-5 p-2 align-middle mx-2" style={{backgroundColor : '#FCEAEA',}}>
                        <BsClockHistory style={{color : '#EF7373', fontSize : 18, marginLeft : 3, marginRight : 3, marginBottom : 5}}/>
                    </span>
                    <div className="px-2 mt-4">
                        <h5 style={{fontSize : 20, height : 12, position :'relative'}}>48K <span style={{fontSize : 14,  position :'absolute', top : 1}}>HRS</span></h5>
                        <span style={{fontSize : 12, height : 12}}>Total Duration</span>
                    </div>
                 </div>
               </div>
               <div className="col-3">
                 <div className="shadow p-3 rounded-3 py-4" style={{backgroundColor : 'white'}}>
                    <span className="rounded-5 p-2 align-middle mx-2" style={{backgroundColor : '#FFDFC2',}}>
                        <FiShoppingBag style={{color : '#FFB064', fontSize : 18, marginLeft : 3, marginRight : 3, marginBottom : 5}}/>
                    </span>

                    <div className="px-2 mt-4">
                        <h5 style={{fontSize : 20, height : 12, position :'relative'}}>2.5K</h5>
                        <span style={{fontSize : 12, height : 12}}>Orders Received</span>
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


export default Storage;