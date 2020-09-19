var array = [1,1,2,3,3];
function removeDuplicate(arr) {
    return array.filter((item, index) => array.indexOf(item) === index);
        
}
console.log(removeDuplicate(array))
