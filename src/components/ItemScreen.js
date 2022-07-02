import React from 'react';
import Item from './Item';

function ItemScreen() {
        
        const Id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const Name = ['Vishwanath', 'Ravi', 'Anuj'];
        return (
            // id: number, Name: string, Price: number, count: number
            <>
                <Item Id = {Id} Name = {Name} />
            </>
        )
    }

export default ItemScreen;