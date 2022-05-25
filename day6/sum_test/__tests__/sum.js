const {describe,expect,test} = require("@jest/globals");
const sum = require("../sum_arguments");

describe("Checking sum functions with different arguments",function(){
    test("All zero",function(){
        expect(sum(0,0,0,0)).toBe(0);
    })
    test("All negative",function(){
        expect(sum(-1,-2,-3,-9,-3,-4)).toBe(-22);
    })
    test("All positive",function(){
        expect(sum(20,100,500,1000,500)).toBe(2120);
    })
    test("Mixture", function(){
        expect(sum(-1,1,3,-3)).toBe(0);
    })
})

