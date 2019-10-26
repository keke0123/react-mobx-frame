
import { observable } from 'mobx';

const Fruits = [
    '사과',
    '복숭아',
    '포도'
];

export const fruitStore = () => {
    const store = {
        get allFruits() {
            return Fruits;
        },
        query: observable.box(''),
        setQuery(query) {
            store.query.set(query);
        },
    }

    return store;
}

export default fruitStore;