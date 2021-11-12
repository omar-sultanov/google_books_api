import React,{useState} from 'react'
import { connect } from 'react-redux';


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const changeHandler=(event)=>{ 
        setSearchValue(event.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.submitHandler(searchValue)
    }
    const onClickCategories=(e)=>{
        props.categoriesHandler(e.target.value);
    }
    const onClickSorting=(e)=>{
        props.sortingHandler(e.target.value);
    }
    return (
        <form onSubmit={onSubmitHandler}  id="SearchBar">
            <div className="container p-5">
                <div className="text-center">
                  <h3>Search for books</h3>  
                </div>
                
                <div className="row p-3 text-center">
                <div id="inputSearch" className="col-12 w-100 ">
                        <input onChange={(e)=>{changeHandler(e)}} className="w-50 border-0" type="text" placeholder="Search books..."/>
                        <button className="border-0 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div className="row text-center">
                    <div className="col d-flex justify-content-end  m-2 text-left">
                    <label htmlFor="cars">Categories:</label>
                        <select onChange={(e)=>{onClickCategories(e)}} name="cars" id="cars">
                          <option value="all">all </option>
                          <option value="biograph">biography</option>
                          <option value="computers">computers</option>
                          <option value="history">history</option>
                          <option value="medical">medical</option>
                          <option value="poetry">poetry</option>
                          
                        </select>
                    </div>
                    <div className="col m-2 d-flex justify-content-start">
                    <label htmlFor="cars">Sorting by </label>
                        <select  onChange={(e)=>{onClickSorting(e)}} name="cars" id="cars">
                          <option value="relevance">relevance</option>
                          <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}
const mapStateToProps=state=>{
    return{
        searchSubmitValue:state.searchSubmitValue,
        selectCategoriesValue:state.selectCategoriesValue,
        selectSortingValue:state.selectSortingValue,
    }
}
const mapDispatchToProps=dispatch=>{

    return{
        submitHandler:(itemSearch)=>dispatch({type:"SEARCH",payload:itemSearch}),
        categoriesHandler:(itemCategories)=>dispatch({type:"CATEGORIES",payload:itemCategories}),
        sortingHandler:(itemSorting)=>dispatch({type:"SORTING",payload:itemSorting})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);

