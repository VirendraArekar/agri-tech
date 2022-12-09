import { Link } from 'react-router-dom';
import ErrorImg from './error-404-monochrome.svg'
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
    return(
        <div id="layoutError" className='my-5 py-5'>
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" 
                                       src={ErrorImg} 
                                       alt="not found"
                                    />
                                    <p className="lead">This requested URL was not found on this server.</p>
                                    <Link to="/" className='text-decoration-none'>
                                        <FaArrowLeft   className="me-1"/>
                                        Return to Dashboard
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default NotFound;