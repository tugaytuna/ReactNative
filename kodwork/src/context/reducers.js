export default function(state,action){
    switch (action.type) {
        case "AddFavorite":
        const data = action.payload.data;


            return {...state, favData: [...state.favData, data]}
            break;
    
        default:
            return {...state}
            break;
    }
}