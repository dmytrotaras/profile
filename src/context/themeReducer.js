export const themeReducer = (state, action) => {
    if(action.type === 'color-1'){
        return{...state, primary: 'color-1'}
    }
    if(action.type === 'color-2') {
        return {...state, primary: 'color-2'}
    }
    if(action.type === 'color-3'){
        return{...state, primary: 'color-3'}
    }
}

export default themeReducer