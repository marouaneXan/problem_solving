//input "1+99+10"
//output 110
const calc=(str)=>{
    var sum=0
    var arr=str.split("+")
    for(let i=0;i<arr.length;i++){
        sum+=Math.floor(arr[i])
    }
    return sum
}
console.log(calc("100+9+1"));//110