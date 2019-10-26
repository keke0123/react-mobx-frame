
import { observable } from 'mobx';

const Names = [
    '정',
    '효',
    '범'
];

export const namesStore = () => {
    const store = {
        get allFruits() {
            return Names;
        },
        query: observable.box(''),
        setQuery(query) {
            store.query.set(query);
        },
    }

    return store;
}

export default namesStore;