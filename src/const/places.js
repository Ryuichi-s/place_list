export const PLACES = [
    '高知県',
    '九州',
    '沖縄',
    '広島',
    '静岡 サウナしきじ',
];

// APIアクセスを模した処理
export const getPlaces = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(PLACES);
        }, 1000)
    })
}