import { useState } from "react";

export const useList = (arr:any) => {
    const [list,setList] = useState(arr);
    const push = (num:number)=>{
        setList([
            ...list,
            num
        ])
    }
    const clear = ()=>{
        setList([])
    }
    const reset = ()=>{
        setList(arr)
    }
    const map = (init:Function)=>{
        let data = list.map(init);
        setList(data);
    }
    const pop = ()=>{
        list.pop();
        setList([...list])
    }
    return [list,{push,pop,clear,reset,map}]
};
