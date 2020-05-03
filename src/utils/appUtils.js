const FOMART_PREFIXES = {
    BOLD: '*',
    ITALICS: '_',
    BOLD_AND_ITALICS: '*_'
}
export const isPositive = (number)=>{
    return Math.sign(number) === 1 || Math.sign(number) === +0;
}

export const handleOrderChange = (collection,order)=>{
    let s = order.map(orderIndex=>collection[orderIndex]);
    return s;
}

export const isMatchFirstAndLast = (text,matchString)=>{
	let matchStringLength = matchString.length,
		stringLength = text.length;
		if(matchStringLength < 2)
			return text.charAt(0) === text.charAt(stringLength-1) && 
			text.charAt(0) === matchString;
	let initial = text.substr(0,matchStringLength);
	let final = reverseString(text.substr(stringLength-matchStringLength))
	return initial == final ? (initial === matchString) || initial === reverseString(matchString):false;
}

export const reverseString = (string)=>string.split('').reverse().join('');
export const removeFirstAndLast = (string, no)=>string.substring(no,string.length-no);
export const stringToArray = (string)=>string.split(' ');
export const isBold = (string)=> isMatchFirstAndLast(string, FOMART_PREFIXES.BOLD);
export const isItalics = (string)=> isMatchFirstAndLast(string, FOMART_PREFIXES.ITALICS);
export const isBoldAndItalics = (string)=> isMatchFirstAndLast(string, FOMART_PREFIXES.BOLD_AND_ITALICS);
