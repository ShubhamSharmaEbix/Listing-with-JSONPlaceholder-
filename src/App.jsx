import './App.css'
import ListTable from './components/ListTable'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container className='mt-5 col-12'>
        <ListTable/>
      </Container>
    </div>
  )
}

export default App
