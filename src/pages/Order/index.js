import BreadCrumb from "../../components/BreadCrumb";
import DataTable from 'react-data-table-component';
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
import { formatSlashDate } from "../../utils";
import React from "react";
import {BsFillCircleFill} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'

const Order = (props) =>{
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Order ID</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>1452627</div>,
            style:{
                paddingTop : 20, paddingBottom : 20
            }
        },
        {
            name: <h5 style={{paddingTop : 20, paddingBottom : 20}}>Code</h5>,
            selector: row =><div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>CO1234</div>,
        },
        {
            name: <h5>Date</h5>,
            selector: row => <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>{formatSlashDate(row.createdAt)}</div>,
        },
        {
            name: <h5>Customer</h5>,
            selector: row => <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>Avi Kashi</div>,
        },
        {
            name: <h5>Total</h5>,
            selector: row => <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>6,500</div>,
        },
        {
            name: <h5>Status</h5>,
            selector: row => <div style={{fontSize : 16, fontWeight : 500, color :'#303030'}}>
                {
                    row.status === 'success' &&
                    <span className="text-success fw-bold align-middle" style={{fontSize : 14}}>
                        <BsFillCircleFill />{" "}
                        Completed
                    </span>
                }
                {
                    row.status === 'warning' &&
                    <span className="text-warning fw-bold align-middle" style={{fontSize : 14}}>
                        <BsFillCircleFill />{" "}
                        Processing
                    </span>
                }
                {
                    row.status === 'danger' &&
                    <span className="text-danger fw-bold align-middle" style={{fontSize : 14}}>
                        <BsFillCircleFill />{" "}
                        Canceled
                    </span>
                }
            </div>,
        },
        {
            name: <h5>Action</h5>,
            selector: row => 
                <div className="d-block text-center" style={{textAlign : 'center'}}>
                  <button className="btn btn-sm btn-color-green rounded-3 mx-1" data-toggle="tooltip" data-placement="top" title="View">
                    <FaEye />
                  </button>
                  <button className="btn btn-sm btn-secondary rounded-3 mx-1" data-toggle="tooltip" data-placement="bottom" title="Delete">
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
            status : 'success'
        },
        {
            id: 2,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'danger'
        },
        {
            id: 3,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'warning'
        },
        {
            id: 4,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 5,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 6,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'danger'
        },
        {
            id: 7,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 8,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 9,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 10,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 11,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
        },
        {
            id: 12,
            name: 'Corn',
            createdAt: '2021-10-13T12:05:45Z',
            status : 'success'
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
              title="Order List"
              subTitle="Order"
              icon="FaClipboardList"
            />

           <div className="mt-4 py-4 mb-2">
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


export default Order;