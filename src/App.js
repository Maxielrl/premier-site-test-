import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function App(props) {
  console.log(props)
  return (

    <div>
      <h1>Velo en vente</h1>
       <div className='container espace'>
         <div className='row'>
         {props.listevelo?.map((velo)=>(
              <div className='col-md-4 centre col-sm-12'>
                      
                      
              <Card>
                <Card.Img variant="top" height='200'src={velo.img} />
                <Card.Body>
                  <Card.Title style={{fontSize: 35}}>{velo.nom}</Card.Title>
                  <Card.Text style={{fontSize: 25}}>
                  velo tout terrain
                  </Card.Text>
                  <Card.Text style={{fontSize: 25}}>
                  <Button href={velo.url} target="_blank">clicker ici </Button>
                  </Card.Text>
                  <Card.Text style={{fontSize: 25}}>
                  <Link to={"/Unvelo/"+velo.identifient}>
                    en savoir plus
                  </Link>
                  </Card.Text>
                </Card.Body>
              </Card>

              </div>  
         ))}
         
          
         </div>
       </div>

 
   
    </div>   
  );
}

export default App;
