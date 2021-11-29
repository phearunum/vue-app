
export const SET_LAYOUT =(state,payload)=>{
    state.layout = payload
}
export const resetState =(state)=>{
    state.isLogin=false;
    state.token=null;
    state.user=null;
    state.table=0;
}


export const ADD_TO_CART =(state,{items,qty})=>{
    state.cart.push({
        items,
        qty
    })
}