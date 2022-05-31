

const products = [
    {
        name: "A1", 
        img: "https://photo-cms-baonghean.zadn.vn/cw607/Uploaded/2022/qvauathlrgoan/2021_09_30/bna_27740310_3092021.jpg",
        detail: "AAA"
    },
    {
        name:"B2bmnsd",
        img:"https://i.pinimg.com/originals/80/52/a8/8052a8827d9a2c838c9f405fda0706be.png",
        detail:"BBB"
    },
    {
        name: "Csdvdsv1", 
        img: "https://cf.shopee.vn/file/abc23894851fa9d6157bed2ca3d1e52a",
        detail: "CCC"
    },
    {
        name: "D2", 
        img: "https://file.tinnhac.com/resize/600x-/2019/04/06/20190406160555-0dc2.png",
        detail: "DDD"
    }
]
const arr = products.filter(pro => pro.name.includes("2"))
const arr1 = products.filter(product => product.detail === "AAA");
const arr2 = [{AAAA : 1}, {BBB: 2}].filter(ele => "AAAA" in ele);
// const arr3 = products.filter(ele => "name" in ele);
console.log("-------------------TH1------------------");
console.log(arr);
console.log("-------------------TH2------------------");
console.log(arr1);
console.log("-------------------TH3------------------");
console.log(arr2);