import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import List from './List';
import axios from 'axios'
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { Button, Container } from 'react-bootstrap'
import AddPostModal from './AddPostModal'
import Pagination from './Pagination';



const ListTable = ()=> {

    const [AllPosts,setAllPosts] = useState([]);  //store the data from the api and generate an array of List component
    const [posts,setPosts] = useState([]);        //stores the array of List component generated by getLists function
    const [lists,setLists] = useState(null)       //stores & display the array of List component according to the items per page range and updates on pagination
    const [changePost,setChangePost] = useState(null);   //stores the post which needs to be edited or deleted
    const [showEditModal,setShowEditModal] = useState(false);
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [showAddPostModal,setShowAddPostModal] = useState(false);


    const setPostsPerPage = (items)=>{
        setPosts(items)
    }

    const showEditModalHandler = (post)=>{
        setShowEditModal(true);
        //save post needs to be edited or changed
        setChangePost(post)
    }

    const showDeleteModalHandler = (post)=>{
        setShowDeleteModal(true);
        //save post needs to be deleted
        setChangePost(post)
    }

 //function that returns an array of List component with api's data
    const getLists = ()=>{
        return AllPosts&&AllPosts.map((post,id)=>(
            <List showEditModal={()=>showEditModalHandler(post)} showDeleteModal={()=>showDeleteModalHandler(post)}  key={id} post={post} serialNo={id}/>
        ))
    }

  
      useEffect(()=>{
        setLists(getLists())
    },[AllPosts])

    useEffect(()=>{
        //call the api whenever modal is closed to get the new modified/deleted data
        if( !showEditModal && !showDeleteModal && !showAddPostModal){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>setAllPosts(res.data))
        }
    },[])

  return (
    <>
        <Container className='d-flex my-5 align-items-center justify-content-center'>
            <Button onClick={()=>setShowAddPostModal(true)} variant='outline-dark'>Add Post</Button>
        </Container>
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            <th className='text-center'>UserID</th>
            <th className='text-center'>PostID</th>
            <th className='text-center'>Title</th>
            <th className='text-center'>Body</th>
            <th className='text-center'>Controls</th>
            </tr>
        </thead>
        <tbody>
            {
                    posts
            } 
        </tbody>
        </Table>
        <EditModal post={changePost} show={showEditModal} onHide={()=>setShowEditModal(false)}/>
        <DeleteModal post={changePost} show={showDeleteModal} onHide={()=>setShowDeleteModal(false)}/>
        <AddPostModal postid={parseInt(AllPosts[0]?.id)+1} show={showAddPostModal} onHide={()=>setShowAddPostModal(false)}/>
        <Pagination items={lists} setPaginationItems={setPostsPerPage} itemsPerPage={5}/>
    </>
  );
}

export default ListTable;