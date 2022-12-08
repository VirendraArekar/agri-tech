import BreadCrumb from "../../components/BreadCrumb";
import DataTable from 'react-data-table-component';
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
import { formatSlashDate, numberWithCommas } from "../../utils";
import React from "react";

const List = (props) =>{
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Product</h5>,
            selector: row => <div>
                               <img src={require('../../assets/images/product.png')}  style={{width : 50}}/>
                               <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}} className="d-inline-block mx-2">{row.name}</div>
                             </div>,
            style:{
                paddingTop : 20, paddingBottom : 20
            },
            width : '250px'
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Code</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{row.code}</div>,
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Category</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{row.category.name}</div>,
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Price</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{numberWithCommas(row.price)}/KG</div>,
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Quantity</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{row.quantity}</div>,
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Inventory</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{row.inventory}</div>,
        },
        // {
        //     name: <h5>Date</h5>,
        //     selector: row => <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{formatSlashDate(row.createdAt)}</div>,
        // },
        {
            name: <h5>Action</h5>,
            selector: row => 
                <div className="d-block text-center" style={{textAlign : 'center'}}>
                  <button className="btn btn-sm btn-color-green rounded-3 mx-1">
                    <FaPencilAlt />
                  </button>
                  <button className="btn btn-sm btn-secondary rounded-3 mx-1">
                    <FaTrashAlt />
                  </button>
                </div>
            
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
              title="Product List"
              subTitle="Product"
              icon="FaBoxOpen"
            />
            <div className="mt-4 py-4">
                <small className="text-color fw-bolder">Show</small>
                <select className="mx-2" style={{width : 50}}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <small className="text-color fw-bolder">entries</small>
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


export default List;