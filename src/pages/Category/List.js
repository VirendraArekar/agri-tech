import BreadCrumb from "../../components/BreadCrumb";
import DataTable from 'react-data-table-component';
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
const List = (props) =>{
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: <h5>Image</h5>,
            selector: row => row.name,
            style :{
                backgroundColor : 'red'
            }
        },
        {
            name: <h5>Category</h5>,
            selector: row => row.name,
        },
        {
            name: <h5>Date</h5>,
            selector: row => row.createdAt,
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
    ]
    
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
                    selectableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
        </div>
    )
}


export default List;