import BreadCrumb from "../../components/BreadCrumb";
import DataTable from 'react-data-table-component';
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
import { formatSlashDate } from "../../utils";
import React from "react";
import Title from '../../components/Title'

const List = (props) =>{
    Title('List Category')
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Image</h5>,
            selector: row => <>
                               <img src={require('../../assets/images/product.png')}  style={{width : 70}}/>
                               <div style={{fontSize : 18, fontWeight : 500, color :'#303030'}} className="d-inline-block mx-2">Lorel Ipsum</div>
                             </>,
            style:{
                paddingTop : 20, paddingBottom : 20
            }
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Category</h5>,
            selector: row =><div style={{fontSize : 18, fontWeight : 500, color :'#303030'}}>{row.name}</div>,
        },
        {
            name: <h5>Date</h5>,
            selector: row => <div style={{fontSize : 18, fontWeight : 500, color :'#303030'}}>{formatSlashDate(row.createdAt)}</div>,
        },
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
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 2,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 3,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 4,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 5,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 6,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 7,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 8,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 9,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 10,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 11,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
        },
        {
            id: 12,
            name: 'Corn',
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
              title="Category List"
              subTitle="Category"
              icon="FaCubes"
            />

            <div className="w-100 shadow rounded-3 mt-5">
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