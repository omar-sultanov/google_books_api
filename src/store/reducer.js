const initialState={
    searchSubmitValue:"",
    selectSortingValue:"relevance",
    selectCategoriesValue:"computers"
}

const reducer=(state=initialState,action)=>{

    if (action.type==="SEARCH") {
        return  Object.assign({}, state, {
            searchSubmitValue:action.payload
          
        })
            }
    if (action.type==="SORTING") {
        return Object.assign({}, state, {
            selectSortingValue:action.payload
      
        })        
    }
    if (action.type==="CATEGORIES") {
        return Object.assign({}, state, {
            selectCategoriesValue:action.payload
        })
    }
console.log(action);
return state
}
export default reducer