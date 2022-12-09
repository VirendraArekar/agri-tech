// import Layouts from './layouts'
// import { useDispatch, useSelector } from "react-redux";
// import { addData, deleteData } from "./store/actions/todoAction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard'
import Sliders from './pages/Slider/List'
import SliderAdd from './pages/Slider/Add'
import SliderEdit from './pages/Slider/Edit'

import Categories from './pages/Category/List'
import CategoryAdd from './pages/Category/Add'
import CategoryEdit from './pages/Category/Edit'

import SubCategories from './pages/SubCategory/List'
import SubCategoryAdd from './pages/SubCategory/Add'
import SubCategoryEdit from './pages/SubCategory/Edit'

import Products from './pages/Product/List'
import ProductAdd from './pages/Product/Add'
import ProductEdit from './pages/Product/Edit'


import Orders from './pages/Order'
import OrderDetail from './pages/Order/Detail'
import Users from './pages/User'
import Inventory from './pages/Inventory'
import ImportExport from './pages/ImportExport'
import Storage from './pages/Storage'


import ProtectedWrapper from './routes/ProtectedWrapper';
import NotFound from "./pages/Error/NotFound";

const App = (props) => {
    // const dispatch = useDispatch();
    // // Selects the state value from the store.
    // const todo = useSelector((state) => state.data.todo);
    // // Dispatches action to add the data
    // const handleAddData = ()=>dispatch(addData());
    // // Dispatches action to delete the data.
    // const handleDeleteData = ()=>dispatch(deleteData());
    // <div>
    //     <button onClick={handleAddData}>Add Data</button>
    //     <button onClick={handleDeleteData}>Delete Data</button>
    
    //     {todo && <div>{JSON.stringify(todo)}</div>}
    // </div> 
    return(
        <Router>
            <Routes>
               <Route exact path="/login" element={<Login/>} />
               <Route exact path="/" element={<ProtectedWrapper><Dashboard/></ProtectedWrapper>} />
               <Route exact path="/sliders" element={<ProtectedWrapper><Sliders/></ProtectedWrapper>} />
               <Route exact path="/slider/edit/:id" element={<ProtectedWrapper><SliderEdit/></ProtectedWrapper>} />
               <Route exact path="/slider/add" element={<ProtectedWrapper><SliderAdd/></ProtectedWrapper>} />

               <Route exact path="/categories" element={<ProtectedWrapper><Categories/></ProtectedWrapper>} />
               <Route exact path="/category/edit/:id" element={<ProtectedWrapper><CategoryEdit/></ProtectedWrapper>} />
               <Route exact path="/category/add" element={<ProtectedWrapper><CategoryAdd/></ProtectedWrapper>} />

               <Route exact path="/sub-categories" element={<ProtectedWrapper><SubCategories/></ProtectedWrapper>} />
               <Route exact path="/sub-category/edit/:id" element={<ProtectedWrapper><SubCategoryEdit/></ProtectedWrapper>} />
               <Route exact path="/sub-category/add" element={<ProtectedWrapper><SubCategoryAdd/></ProtectedWrapper>} />

               <Route exact path="/products" element={<ProtectedWrapper><Products/></ProtectedWrapper>} />
               <Route exact path="/product/edit/:id" element={<ProtectedWrapper><ProductEdit/></ProtectedWrapper>} />
               <Route exact path="/product/add" element={<ProtectedWrapper><ProductAdd/></ProtectedWrapper>} />
               

               <Route exact path="/orders" element={<ProtectedWrapper><Orders/></ProtectedWrapper>} />
               <Route exact path="/order/detail/:id" element={<ProtectedWrapper><OrderDetail/></ProtectedWrapper>} />

               <Route exact path="/app-users" element={<ProtectedWrapper><Users/></ProtectedWrapper>} />

               <Route exact path="/inventory-management" element={<ProtectedWrapper><Inventory/></ProtectedWrapper>} />

               <Route exact path="/import-export" element={<ProtectedWrapper><ImportExport/></ProtectedWrapper>} />

               <Route exact path="/storage" element={<ProtectedWrapper><Storage/></ProtectedWrapper>} />
               
               <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}

export default App;