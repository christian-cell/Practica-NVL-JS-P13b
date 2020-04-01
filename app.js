const str ="hola";


const isPalindrome = (inStr) => {


    inStr = inStr.toLowerCase();
    for (let i=0; i<inStr.length; i+=1){
        if(inStr[i] !== inStr[inStr.length -1 -i]){
            return false;
        }
    }
    return true;
}
    console.log(isPalindrome(str));

