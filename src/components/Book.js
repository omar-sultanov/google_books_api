import React from 'react'
import Edit from './Edit';
import BookList  from './BookList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    useParams,
    Link
  } from "react-router-dom";
import SearchBar from './SearchBar';
  
const Book = (props) => {


    return (
          
        <>
      
        {props.infoOfBook.map((book)=>(
        <div id="Book" key={book.id}>
            <div className="card h-100 border-0 rounded-0" style={{width: "15rem"}}>
                <Link to={`/edit/${book.id}`} className="d-flex justify-content-center h-100">
                    <img  actions={`edit/${book.id}`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`} height="230px" className="card-img-top w-75 mx-auto mt-5 mb-3" alt="..."/>
                </Link>
                
                <div className="card-body">
                    <a href="/link" className="card-link">{book.volumeInfo.categories}</a>
                    <h6 className="card-title">{book.volumeInfo.title}</h6>
                    <a href="/author" className="card-link">{book.volumeInfo.authors}</a>
                </div>
            </div>
            
        </div> 

        ))}

       
       
        
   
 

    </>
        
  

    )
}
   
export default Book
