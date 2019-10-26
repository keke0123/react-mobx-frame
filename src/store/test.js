import React from 'react';
import {useObserver} from 'mobx-react-lite';

export const useStoreData = (context, storeSelector, dataSelector) => {
    const value = React.useContext(context);
    if(!value) {
        throw new Error();
    }
    const store = storeSelector(value);
    return useObserver(() => {
        return dataSelector(store);
    });
}