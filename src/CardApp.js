import React from 'react';
import { Provider } from "react-redux";

import { store } from './redux/store/store';
import { CardsModal } from './components/cards/CardsModal';

export const CardApp = () => {
    return (
        <div>
            <Provider store={ store }>
                <CardsModal />
            </Provider> 
        </div>
    )
}
