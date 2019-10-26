
import fruitStore from './fruits';
import namesStore from './names';

export const createStore = () => {
    const store = {
        fruitStore: fruitStore(),
        namesStore: namesStore()
    }
    return store;
}