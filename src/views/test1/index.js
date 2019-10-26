import React, { useState, useEffect } from 'react';
import {useObserver} from 'mobx-react-lite';
import {storeContext} from '../../store/context';
import fruitStore from '../../newStore/fruits';
// import {useStoreData} from '../../store/test';

function Test1() {
    const [test, setTest] = useState();
    const store = React.useContext(storeContext);
    // console.log('storeContext', storeContext);
    // console.log('store', store);

    const fruitStore = store.fruitStore;

    // console.log('allFruits', fruitStore.allFruits);
    // fruitStore.setQuery('hihi');
    // console.log('query', fruitStore.query.get());

    // const fruitStore = useStoreData(storeContext, contextData=>contextData, store=>store.fruitStore);
    // console.log(fruitStore);
    console.log('test refresh');

    function changeValue() {
        console.log('change value');
        fruitStore.setQuery('test2 success');
        // store.setQuery('test success');
    }
    
    return useObserver(() => {
        return (
            <div>
                test2 page
                <div>
                    {/* {store.query.get()} */}
                    {fruitStore.query.get()}
                </div>
                <button onClick={changeValue}>test</button>
            </div>
        );
    });
}

export default Test1;