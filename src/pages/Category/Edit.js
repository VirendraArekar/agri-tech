import BreadCrumb from "../../components/BreadCrumb";
import Title from '../../components/Title'
const Edit = (props) =>{
    Title('Edit Category')
    return(
        <div className="container-fluid py-sm-4 py-md-4 py-lg-4">
            <BreadCrumb 
              title="Edit Category"
              subTitle="Category"
              icon="FaCubes"
            />

            <div className="w-100 bg-white shadow rounded-3 mt-5">
                <h4 className="px-4 pt-4 mx-2 pb-3">Edit Category</h4>
                <hr className="hr" />
                <div className="p-4 pt-3 mx-2">
                    <div className="form-group">
                        <h5 htmlFor="imageInput" className="pb-2">Image</h5>
                        <input type="file" className="form-control form-control-lg" id="imageInput" aria-describedby="imageHelp" placeholder="Select image" style={{ fontSize : 17}} />
                        {/* <small id="imageHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                    </div>

                    <div className="form-group mt-3">
                        <h5 htmlFor="categoryName" className="pb-2">Category</h5>
                        <input type="text" className="form-control form-control-lg " id="categoryName" aria-describedby="categoryHelp" placeholder="Enter Category Name" style={{ fontSize : 17}}/>
                        {/* <small id="categoryHelp" className="form-text text-danger">We'll never share your email with anyone else.</small> */}
                    </div>

                    <div className="my-4 mt-5">
                       <button className="btn btn-md btn-green rounded-3 me-3">Add Category</button>
                       <button className="btn btn-md btn-secondary rounded-3">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Edit;