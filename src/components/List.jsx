import { Button } from 'react-bootstrap'

const List = ({post,showEditModal,showDeleteModal})=>{
    

    return(
        <tr>
            <td className='text-center'>{post.userId}</td>
            <td className='text-center'>{post.id}</td>
            <td className='text-center text-wrap w-25'>{post.title}</td>
            <td className='text-center text-wrap w-25'>{post.body}</td>
            <td className='text-center align-middle'>
                <Button className='w-25 m-1' onClick={showEditModal} variant='outline-primary'>Edit</Button>
                <Button className='w-25 m-2' onClick={showDeleteModal} variant='outline-danger'>Delete</Button>
            </td>
        </tr>
    )
}

export default List;