import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore } from './index';

export const storeContext = React.createContext();

export const StoreProvider = ({ children }) => {
    const store = useLocalStore(createStore);
    // console.log('children', children);
    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    );
}

export default StoreProvider;