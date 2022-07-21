import {Modal, Button} from 'react-bootstrap';
import axios from 'axios'
import PostForm from './Form';

const DeleteModal = (props)=> {

    const deleteListHandler = ()=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`)
        .then(res=>props.onHide())
    }

  return (
    <Modal {...props} centered>
        <Modal.Header className='bg-danger text-white' closeButton closeVariant='white'>
            <Modal.Title>Delete Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Are you sure, you want to delete this record ?</h6>
        </Modal.Body>
        <Modal.Footer className='d-flex align-items-center justify-content-evenly' >
            <Button className='w-25' variant="danger" onClick={deleteListHandler}>
                Yes
            </Button>
            <Button className='w-25' variant="secondary" onClick={props.onHide}>
                No
            </Button>
        </Modal.Footer>
    </Modal>
  );
}


export default DeleteModal;
