type User = {
    id: number;
    name: string;
    age: number;
    salary: number;
}
const user1 : User={
    id:1,
    name:"parth",
    age:12,
    salary:12234
}
const user2 : User={
    id:2,
    name:"aman",
    age:10,
    salary:10000
}
const user3 : User={
    id:3,
    name:"ullu",
    age:5,
    salary:99999
}

let arr:User[] = [user1,user2,user3];

function mySort(arr:User[],q:string):User[]{
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i][q]>arr[j][q]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
let out = mySort(arr,"name");
console.log(out);

