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
    /* design v2 */
    if(action.type === 'color-4'){
        return{...state, primary: 'color-4'}
    }
    if(action.type === 'color-5'){
        return{...state, primary: 'color-5'}
    }
    if(action.type === 'color-6'){
        return{...state, primary: 'color-6'}
    }
}

export default themeReducer