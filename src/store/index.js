
// 스토어 안에 observable.box(value) 로 넣어서 get set 을 사용하는 방법을 권장하는듯 하다.
// import { observable } from 'mobx';
// query: observable.box(''),
//         setQuery(query: string) {
//             store.query.set(query.toLowerCase());
//         },
//         get filteredCities() {
//             return Cities.filter(
//                 city => city.toLowerCase().includes(store.query.get())
//             )
//         }

import { observable } from 'mobx';

const Fruits = [
    '사과',
    '복숭아',
    '포도'
];

export const createStore = () => {
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

// 이런식으로 타입도 export 할수 있다.
// export type TStore = ReturnType<typeof createStore>