export default function(state,action){
    switch (action.type) {
        case "AddFavorite":
            return {...state, favData: [...state.favData, action.payload.name]}
            break;
    
        default:
            return {...state}
            break;
    }
}