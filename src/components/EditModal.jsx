import {Modal} from 'react-bootstrap';
import PostForm from './Form';


const EditModal = (props)=> {
    


  return ( 
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className='bg-primary text-white' closeButton closeVariant='white'>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm editModal post={props.post} onHide={props.onHide}/>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;