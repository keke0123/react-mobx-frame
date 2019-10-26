import React, { useState, useEffect } from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from '../../store/context';

function Fruits() {
    const [test, setTest] = useState();
    const store = React.useContext(storeContext);
    console.log('store', store);
    console.log('allFruits', store.allFruits);
    store.setQuery('hihi');
    console.log('query', store.query.get());
    
    return useObserver(() => {
        return (
            <div>
                fruits page
            </div>
        );
    });
}

export default Fruits;