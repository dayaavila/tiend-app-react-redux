// import { types } from "../types/types";

import { types } from "../types/types";

// nombre de la funcion que se usara
// recibo el objeto {title: descri..:}

const initialState = {
    card: []
}

export const cardsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.addCard:
            return {
                ...state, card: [...state.card, action.payload]
            }
    
        default:
            return state;
    }

    // switch ( action.type ) {
    //     case 'ADD-CARD':
    //         return {
    //             ...state, card: [...state.card, action.payload]
    //         }
    
    //     default:
    //         return state;
    // }
}