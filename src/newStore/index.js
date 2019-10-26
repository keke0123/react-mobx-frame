
import fruitStore from './fruits';
import namesStore from './names';

export const createStore = () => {
    const store = {
        fruitStore,
        namesStore
    }
    return store;
}