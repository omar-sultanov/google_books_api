
// import axios from 'axios'

const initialState={
    searchSubmitValue:"",
    selectSortingValue:"relevance",
    selectCategoriesValue:"computers",

}

const reducer=(state=initialState,action)=>{
//     const Books=async()=>{
//     const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${state.searchSubmitValue}+${state.selectCategoriesValue}&orderBy=${state.selectSortingValue}`)
//    const books=response.data.items
//  return books
 
//     }
//       state.Allbooks=Books();

//   console.log(state.Allbooks);
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
        console.log(action.payload);
        return Object.assign({}, state, {
            selectCategoriesValue:action.payload
        })
    }

console.log(action.payload);

return state
}
console.log(initialState);
export default reducer