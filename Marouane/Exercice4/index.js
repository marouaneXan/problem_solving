// input: string1=danger string2=garden => the string 1 have the same caractere string2 
// output: true
function isAnagrams(s1,s2){
    let cpt=0
    if(s1.length!=s2.length) return false
    for(let i=0;i<s1.length;i++){
        for(let j=0;j<s2.length;j++){
            if(s1[i]===s2[j]) {
                cpt++
                break
            } 
        }
    }
    return cpt===s1.length ? true:false 
}
console.log(isAnagrams("garden","danger"))