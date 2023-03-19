export default function(state,action){
    switch (action.type) {
        case "AddFavorite":
        const data = action.payload.data;
            return {...state, favData: [...state.favData, data]}
            break;
        case "DeleteOnes":
            // console.log({...state.favData});
        allData = {...state.favData};
        return {...state, favData: allData}    
        
        default:
            return {...state}
            break;
    }
}