import React,{useState,useEffect} from 'react'
import {useLocation} from "react-router-dom";
import "../App.css"
const Edit = (props) => {
  
         const id = useLocation().pathname.substr(6);
        

         const findBook= props.editBook.filter(item=>item.id===id)
       


const title=findBook[0].volumeInfo.title;
const category=findBook[0].volumeInfo.categories;
const author=findBook[0].volumeInfo.authors;
const description=findBook[0].volumeInfo.description;

    return (
        <div id="parentPart" className="row d-flex justify-content-center flex-row  w-100">
            
            <div id="rigthPart" className="col-5 bg-light text-center">
                <img className="py-5" src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`} width="260px"  alt="..."/>
            </div>
            <div id="leftPart" className="col-5 ">
                <div className="p-4">
                <p  className="text-secondary">{category}/General</p>
                <h4>{title}</h4>
                <a className="text-secondary" href="/author">{author}</a>
                <div class="my-3">                    
                </div>

  <textarea className="form-control" id="exampleFormControlTextarea1" cols="9" rows="7">{description}</textarea>
</div>
               
            </div>
        </div>
    )
}


export default Edit;
