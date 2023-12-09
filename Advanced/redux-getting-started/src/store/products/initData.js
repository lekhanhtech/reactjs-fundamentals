import { v4 as uuidv4 } from 'uuid';
const products = [
    {
        id: uuidv4(),
        category: "Điện thoại Smartphone",
        preview: "https://salt.tikicdn.com/cache/280x280/ts/product/6a/ae/73/dca08fe3804172059e7d19a962648fe5.png",
        price: 40990000,
        stocked: true, 
        name: "Điện thoại Samsung Galaxy Z Fold 4 (12GB/256GB) - Hàng chính hãng"
    },
    {
        id: uuidv4(),
        category: "Điện thoại Smartphone",
        preview: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/e3b9ff9622ed61e1ee11bf2297bcc2d8.png",
        price: 32990000,
        stocked: true, 
        name: "Apple iPhone 14 Pro"
    },
    {
        id: uuidv4(),
        category: "Thiết Bị Số",
        preview: "https://salt.tikicdn.com/cache/280x280/ts/product/57/10/d8/1ce4259d9fe8c0200da3240f0973176a.jpg",
        price: 11990000,
        stocked: false, 
        name: "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro Bluetooth (45mm) R920 - Hàng Chính Hãng"
    },
    {
        id: uuidv4(),
        category: "Thiết Bị Số",
        preview: "https://salt.tikicdn.com/cache/280x280/ts/product/4e/a1/63/0a11604a254f76c93add93682c165343.png",
        price: 2940000,
        stocked: true, 
        name: "Card âm thanh Behringer U-PHORIA UMC204HD -Hàng Chính Hãng"
    },
    {
        id: uuidv4(),
        category: "Thiết bị gia đình",
        preview: "https://salt.tikicdn.com/cache/280x280/ts/product/13/af/19/a9ff9d5460a27403964002818d975feb.jpg",
        price: 10534000,
        stocked: true, 
        name: "Máy giặt Toshiba 9.5 kg TW-BL105A4V(SS) -Hàng chính hãng-Giao toàn quốc"
    },
];

export default products;