import React from 'react';

export const CardsScreen = ({ card = 'Hola' }) => {
    return (
        <div>
            <div>
                <ul>
                    { card }
                </ul>
            </div>
        </div>
    )
}
