import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Unvelo(props){
    let {identifient}=useParams()
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 mt-5'>
                <img height='300' src={props.listevelo[identifient-1].img}></img>
                </div>
                <div className='col-md-6 col-sm-12 mt-5'>
                    <h1>{props.listevelo[identifient-1].nom}</h1>
                    <p style={{fontSize: 20}}>{props.listevelo[identifient-1].type}</p>
                </div>
       
       
              </div>
        </div>
    )
}
export default Unvelo;