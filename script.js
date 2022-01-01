function check(param1, param2) {
    if (param1 === param2) {
        console.log(`${param1}=${param2}`); 
        let newdeger = param1 + param2;
        return newdeger;
    } else {
        return console.log("Eşitlik yok.");
    }
}


let a = check(5, 5) + 5;
console.log(a);

const arrowFunc = (params) => {

}

arrowFunc();

let arr = [6, "number", {}, 9, ["6", 7], true];
//arr[1] = 5;
//console.log(arr[1]);

let filteredArr = arr.filter
    (

        (item, i, array) => {
            if (i === 4) {
                return item;
            }

        }
    )

//console.log(filteredArr);

//console.log(arr);

let newArr = [];
arr.forEach(i => {
    if (i > 3) {

        newArr.push(i);
    }
});


//console.log(newArr);


let num = "";
for (let i = 0; i < 10; i++) {
    num += "#";
    //console.log(num);
}

let tree = "";
for (let i = 0; i < arr.length; i++) {
    tree += arr[i];
    //console.log(tree);
}
let array1 = [6, 7, 8, 9];
//for (i in array1) { console.log(array1[i]) }

for (item of array1) {
    //console.log(item);
}

let haystack_1 = ['3', '123124234', undefined, 'needle', NaN, 'world', "nee", 'hay',"aknee" ,2, '3', true, false];

let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];

var haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3,  4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

function findNeedle(arr) {

    let iffind = arr.find((item) => item === true);
    let indexNum = arr.indexOf(iffind);
    let ind = arr.findIndex((item)=> item === iffind);
    // console.log(iffind);
    // console.log(indexNum);
    // console.log(ind);

}

findNeedle(haystack_1);




function findNee(arr,value) {


for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]=== "string") {
        //console.log(arr[i]);

        if (arr[i].includes(value)) {
            return [arr[i],i];
        }
    }
    
}


}

//console.log(findNee(haystack_1,"hay"));

function filterword(arr,value) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i]=== "string") {
            //console.log(arr[i]);
    
            if (arr[i].includes(value)) {
                result.push([arr[i], i])
                
                
            }
        }
        
    } return result;
    
    
}
    
console.log(filterword(haystack_2, "needle"));

