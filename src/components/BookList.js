import React,{useState,useEffect} from 'react'
import Book from './Book'
import axios from 'axios'
import { connect } from 'react-redux';

const  BookList = (props) => {
    //AIzaSyDMiP4Ietq5zmLXBdbcdRM2iQWTPhoH1g4
    //booklist-327906

    const [books, setBooks] = useState([]);
    const arrItems=[];
    const intitle=props.searchSubmitValue;
    const subject=props.selectCategoriesValue;
    const orderBy=props.selectSortingValue;
    arrItems.push(intitle,subject,orderBy)
        
    useEffect(async () => {
         const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${intitle}+${subject}&orderBy=${orderBy}`)
        setBooks(response.data.items)

 },arrItems);

    return (
        <div id="BookList">
            <Book infoOfBook={books}/>    
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        searchSubmitValue:state.searchSubmitValue,
        selectCategoriesValue:state.selectCategoriesValue,
        selectSortingValue:state.selectSortingValue,
    }
}

export default connect(mapStateToProps)(BookList)
