import React, { useState, useEffect } from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from '../../store/context';
// import {useStoreData} from '../../store/test';

function Fruits() {
    const [test, setTest] = useState();
    const store = React.useContext(storeContext);
    // console.log('storeContext', storeContext);
    // console.log('store', store);

    // const fruitStore = store.fruitStore();

    // console.log('allFruits', fruitStore.allFruits);
    // fruitStore.setQuery('hihi');
    // console.log('query', fruitStore.query.get());

    // console.log('test', useStoreData(storeContext, contextData=>contextData, store=>store.allFruits));
    function changeValue() {
        console.log('change value');
        // fruitStore.setQuery('test success');
        store.setQuery('test success');
    }
    
    return useObserver(() => {
        return (
            <div>
                fruits page
                <div>
                    {store.query.get()}
                </div>
                <button onClick={changeValue}>test</button>
            </div>
        );
    });
}

export default Fruits;