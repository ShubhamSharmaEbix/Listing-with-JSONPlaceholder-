import { Modal}  from 'react-bootstrap';
import PostForm from './Form';



const AddPostModal = (props)=>{
   

    return(
        <Modal {...props} centered>
            <Modal.Header className='bg-dark text-white' closeButton closeVariant='white'>
                <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Please fill the below details :</h6>
                <PostForm postid={props.postid} onHide={props.onHide}/>
            </Modal.Body>
        </Modal>
    )
}

export default AddPostModal;