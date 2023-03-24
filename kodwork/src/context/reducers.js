

export default function(state,action){
    switch (action.type) {
        case "AddFavorite":
        const data = action.payload.data;
            return {...state, favData: [...state.favData, data]}
            break;
        case "DeleteOnes":
         
        allData = {...state.favData};
        const index = action.payload.removeIndex;
        console.log("alldata: ",{allData})
        // allData.map(r => {
        //     if(r.index != index){
        //         return {...state.favData};
        //     }
        // });
        // allData[index] = null;

        allData = allData.filter((kk) => kk.index != index);
        return {...state, favData: [allData]}    
        
        default:
            return {...state}
            break;
    }
}