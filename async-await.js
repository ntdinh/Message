let sum = (a,b) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a != "number"){
                return reject("Gia tri truyen phai la so");

            }
            resolve(a+b);
        }, 1000);
    });
}
let tich = (a,b) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(typeof a != "number") {
                return reject("Khong dung dinh dang");
            }
            resolve(a*b);
        },1000);
    })
}
(async()=> {
    try {
       let total03 =await sum(10,10);
       let total04 = await sum(total03,10)
       console.log(total04); 

    } catch (error) {
        console.log(error);
    }
})();
let tich2 = async()=>{
    try {
        let tich1=await tich(10,10);
        console.log(tich1)
    } catch (error) {
        console.log(error);
    }
}
let tich3 = async()=>{
    try {
        let tich1=await tich(10,10);
        console.log(tich1)
    } catch (error) {
        console.log(error);
    }
}
tich2();