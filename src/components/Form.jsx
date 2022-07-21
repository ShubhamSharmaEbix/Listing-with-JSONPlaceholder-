import { Form, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


const PostForm = (props)=>{

    const [post,setPost] =useState({
        userId : props.editModal?(props.post?.userId):'1',
        id : props.editModal?props.post?.id:props.postid,   
        body : props.editModal?props.post?.body:'',
        title : props.editModal?props.post?.title:''
    })

     const changeInputHandler = (e,field)=>{
        switch(field){
            case 'body'   : setPost({...post, body : e.target.value});break;
            case 'title' : setPost({...post, title : e.target.value});break;
        }
    }


      const submitButtonHandler = (event)=>{
        event.preventDefault();
 
        if(props.editModal){
            axios.put(`https://jsonplaceholder.typicode.com/posts/${props.post.userId}`,post)
            .then(res=>props.onHide())
        }
        else{
             axios.post('https://jsonplaceholder.typicode.com/posts',post)
            .then(res=>props.onHide())
        }
       
    }
    
   
    return(
        <Form className={!props.editModal&&'mt-3 border p-2'}>
            <Form.Group as={Row} className='mb-2'>
                <Form.Label column sm='2'>
                    <h6>Body</h6>
                </Form.Label>
                <Col sm='10' md='20'>
                        <Form.Control  className='w-100'  value={post.body} onChange={(event)=>changeInputHandler(event,'body')}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-1'>
                <Form.Label column sm='2'>
                    <h6>Title</h6>
                </Form.Label>
                <Col sm='10' md='20'>
                        <Form.Control  className='w-100'  value={post.title} onChange={(event)=>changeInputHandler(event,'title')}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group className='text-end mt-3'>
                <Button className='mx-auto' variant='primary' type='submit' onClick={submitButtonHandler}>Submit</Button>
            </Form.Group>
        </Form>
    )

}

export default PostForm;