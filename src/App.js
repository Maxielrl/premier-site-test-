import 'bootstrap/dist/css/bootstrap.min.css';
import velo1 from './image/mm.jpg'
import velo2 from './image/bh.jpeg'
import velo3 from './image/hh.jpg'
import velo4 from './image/tt.jpg'
import velo5 from './image/rr.jpg'
import velo6 from './image/ss.jpg'
import Button from 'react-bootstrap/Button';
import './App.css';
import Card from 'react-bootstrap/Card';

function App() {
  return (

    <div>
      <h1>Velo en vente</h1>
       <div className='container espace'>
         <div className='row'>
          <div className='col-4 centre'>
            <Card>
              <Card.Img variant="top" height='200'src={velo1} />
              <Card.Body>
                <Card.Title style={{fontSize: 35}}>Mondraker</Card.Title>
                <Card.Text style={{fontSize: 25}}>
                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
              </Card.Body>
            </Card>
           </div>  
           <div className='col-4 centre'>
           <Card>
              <Card.Img variant="top" height='200'src={velo2} />
                <Card.Body>
                  <Card.Title style={{fontSize: 35}}>Bh lynx trail</Card.Title>
                <Card.Text style={{fontSize: 25}}>

                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
              
              </Card.Body>
            </Card>
            </div>  
            <div className='col-4 centre'>
           <Card>
              <Card.Img variant="top" height='200'src={velo3} />
                <Card.Body>
                  <Card.Title style={{fontSize: 35}}>Peregrin</Card.Title>
                <Card.Text style={{fontSize: 25}}>
                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
                
              </Card.Body>
            </Card>
            </div>  
         </div>
         <div className='row espace'>
          <div className='col-4 centre'>
            <Card>
              <Card.Img variant="top" height='200'src={velo4} />
              <Card.Body>
                <Card.Title style={{fontSize: 35}}>foes</Card.Title>
                <Card.Text style={{fontSize: 25}}>
                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
              </Card.Body>
            </Card>
           </div>  
           <div className='col-4 centre'>
           <Card>
              <Card.Img variant="top" height='200'src={velo5} />
                <Card.Body>
                  <Card.Title style={{fontSize: 35}}>Santa Cruz</Card.Title>
                <Card.Text style={{fontSize: 25}}>

                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
              
              </Card.Body>
            </Card>
            </div>  
            <div className='col-4 centre'>
           <Card>
              <Card.Img variant="top" height='200'src={velo6} />
                <Card.Body>
                  <Card.Title style={{fontSize: 35}}>Santa Cruz</Card.Title>
                <Card.Text style={{fontSize: 25}}>
                velo tout terrain
                </Card.Text>
                <Card.Text style={{fontSize: 25}}>
                <Button href="https://www.google.com/" target="_blank">clicker ici </Button>
                </Card.Text>
                
              </Card.Body>
            </Card>
            </div>  
         </div>
       </div>

 
   
    </div>   
  );
}

export default App;
