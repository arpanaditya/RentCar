const initialData = {
    bookings : [],
    loading : false,
    error : null
}

export const bookingsReducer = (state=initialData, action)=>{

    switch(action.type){


        case 'GET_ALL_BOOKINGS' : {
            return{
            ...state,
            bookings : action.payload
            }
        }

        default:return state
    }

}
