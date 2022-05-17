var user1 = {
    id: 1,
    name: "parth",
    age: 12,
    salary: 12234
};
var user2 = {
    id: 2,
    name: "aman",
    age: 10,
    salary: 10000
};
var user3 = {
    id: 3,
    name: "ullu",
    age: 5,
    salary: 99999
};
var arr = [user1, user2, user3];
function mySort(arr, q) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i][q] > arr[j][q]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var out = mySort(arr, "age");
console.log(out);
