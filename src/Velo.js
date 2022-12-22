import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Velo.css'
import {Link} from 'react-router-dom';
function Velo(){
return (
    <>
      <Navbar expand="lg" variant="light" bg="black">
        <Container>
          <Navbar.Brand className='blanc' ><Link to='/'>Page Acceuil</Link></Navbar.Brand>
          <Navbar.Brand className='blanc' ><Link to='Velos'>Page de Velo</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>
)
}
export default Velo