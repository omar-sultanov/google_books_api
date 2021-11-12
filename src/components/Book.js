import React from 'react'
const Book = (props) => {
    return (
        <>
        {props.infoOfBook.map((book,id)=>(
        <div id="Book" key={id}>
            <div className="card h-100 border-0 rounded-0" style={{width: "15rem"}}>
                <img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`} className="card-img-top h-50 w-50 mx-auto mt-5 mb-3" alt="..."/>
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
