


const Fruits = [
    '사과',
    '복숭아',
    '포도'
];

export const createStore = () => {
    const store = {
        get allFruit() {
            return Fruits;
        }
    }

    return store;
}

// 이런식으로 타입도 export 할수 있다.
// export type TStore = ReturnType<typeof createStore>