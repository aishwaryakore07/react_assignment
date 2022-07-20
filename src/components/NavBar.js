import './NavBar.css';
import Blogs from './Blogs'
import axios from 'axios';
// import Form from './Form.js'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs'
function NavBar(){
    const [openModal,setOpenModal] =useState(false)

    const handleOpenModal = () =>{
        setOpenModal(true)
    }
    const handleCloseModal = ()=>{
        setOpenModal(false)
    }
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [reading_time, setReadTime] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); 

        console.log('title', title);
        console.log('description', description);
        console.log('author', author);
        console.log('readTime', reading_time);

        
        let postObject={
            title:title,
            description:description,
            author:author,
            reading_time:reading_time
        }
        axios.post(baseURL, postObject, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then((response) => {
            console.log("Successful")
            setTitle('');
            setDescription('');
            setAuthor('');
            setReadTime('');
        });
    };
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button type="button" class="btn btn-primary" onClick={handleOpenModal}>
                Add a Post
            </button>
            <Modal show={openModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Post a blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <form onSubmit={handleSubmit}>
                    <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                    placeholder="Title"
                    />
                    <input
                    id="description"
                    name="description"
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder="Description"
                    />
                    <input
                    id="author"
                    name="author"
                    type="text"
                    value={author}
                    onChange={event => setAuthor(event.target.value)}
                    placeholder="Author"
                    />
                    <input
                    id="readTime"
                    name="readTime"
                    type="text"
                    value={reading_time}
                    onChange={event => setReadTime(event.target.value)}
                    placeholder="Reading Time"
                    />
                    <button type="submit">Submit form</button>
                </form>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseModal}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
  
            </nav>
        </>
    );
}

export default NavBar;
