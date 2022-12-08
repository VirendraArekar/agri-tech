import '../layouts/style.css'
import {FaCubes,FaAngleDoubleRight, FaBoxOpen,FaInbox} from 'react-icons/fa'
const BreadCrumb = (props) => {
    return(
        <div className="d-black align-middle">
           <h5 className="text-color-dark fw-normal d-inline-block me-4">{props.title}</h5>|
           <small className='d-inline-block mx-4 align-middle' style={{fontSize : 12}}>
             {
                props.icon === 'FaCubes' &&
                <FaCubes className='color-green me-2 fw-lighter'/>
             }
             {
                props.icon === 'FaBoxOpen' &&
                <FaBoxOpen className='color-green me-2 fw-lighter'/>
             }
             {
                props.icon === 'FaInbox' &&
                <FaInbox className='color-green me-2 fw-lighter'/>
             }
             <FaAngleDoubleRight className='fw-normal'/>
             <span className='mx-2 color-green'>{props.subTitle}</span>
             <FaAngleDoubleRight  className='fw-normal'/>
             <span className='mx-2'>{props.title}</span>
           </small>
        </div>
    )
}

export default BreadCrumb;