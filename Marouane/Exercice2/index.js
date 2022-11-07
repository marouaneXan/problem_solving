// voyels: a,e,i,u,y
// a=1,e=2,i=3,u=4,y=5 if the caracter's Upper A=a*2,E=e*2
// input aiAe 
// output 8 the sum of the values of the caracters

// check if the caracter's Lower
const isVoyelLower=(c)=>{
    return (c=="a" || c=="e" || c=="i" || c=="u" || c=="y") ? true :false
}
//check if the caracter's upper
const isVoyelUpper=(c)=>{
    return (c=="A" || c=="E" || c=="I" || c=="U" || c=="Y") ? true :false
}
