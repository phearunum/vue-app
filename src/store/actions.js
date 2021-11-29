
export const layout = (context, value) => { context.commit('layout', value) }
export const clearState = ({ commit }) => {
    commit('resetState');
}

export const addItemsToCart = ({ commit }, { items, qty }) => {
    commit('ADD_TO_CART', { items, qty })
}