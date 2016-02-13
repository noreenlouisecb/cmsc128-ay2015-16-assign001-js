/* BUNDOC, NOREEN LOUISE C.
	 CMSC 128 AB - 7L
	 PROGRAMMING ASSIGNMENT 01: NUMBER LIBRARY
*/

/*
	Input: Number (Min: 0, Max: 1000000)
	Output: the output is stored in variable ans			  
	
	This function transforms the number into word form.
*/
function numToWords(number){
	var ans = "";

	if(number <= 1000000 && number >= 0){
		if(number == 0){
			ans = "zero";
		} else {
			if(number % 1000000 == 0){
				number = number - ((number / 1000000) * 1000000);
				ans = ans + "one million ";
			} 
			
			var thous = 0;			
			if(number % 100000 != number) {	
				switch(Math.floor(number/100000)){
					case 1: ans = ans + "one hundred ";  break;
					case 2: ans = ans + "two hundred "; break;
					case 3: ans = ans + "three hundred "; break;
					case 4: ans = ans + "four hundred "; break;
					case 5: ans = ans + "five hundred "; break;
					case 6: ans = ans + "six hundred "; break;
					case 7: ans = ans + "seven hundred "; break;
					case 8: ans = ans + "eight hundred "; break;
					case 9: ans = ans + "nine hundred "; break;
				}
				number = number - (Math.floor(number/100000) * 100000);
				thous = 1;
			}
			
			if(number % 10000 != number){
				switch(Math.floor(number/10000)){
					case 1: var temp = number;
							temp = number - (Math.floor(number/10000) * 10000);
							if(Math.floor(temp % 1000) == temp){
								ans = ans + "ten "; 
								break;
							} else{
								switch(Math.floor(temp/1000)){
									case 1: ans = ans + "eleven "; break;
									case 2: ans = ans + "twelve "; break;
									case 3: ans = ans + "thirteen "; break;
									case 4: ans = ans + "fourteen "; break;
									case 5: ans = ans + "fifteen "; break;
									case 6: ans = ans + "sixteen "; break;
									case 7: ans = ans + "seventeen "; break;
									case 8: ans = ans + "eighteen "; break;
									case 9: ans = ans + "nineteen "; break;
								}
								temp = temp - (Math.floor(temp/1000) * 1000);
								number = temp;
								break;
							}
					case 2: ans = ans + "twenty "; break;
					case 3: ans = ans + "thirty "; break;
					case 4: ans = ans + "forty "; break;
					case 5: ans = ans + "fifty "; break;
					case 6: ans = ans + "sixty "; break;
					case 7: ans = ans + "seventy "; break;
					case 8: ans = ans + "eighty "; break;
					case 9: ans = ans + "ninety "; break;
				}
				number = number - (Math.floor(number/10000) * 10000);
				thous = 1;
			}
			
			
			if(number % 1000 != number){
				switch(Math.floor(number/1000)){
					case 1: ans = ans + "one "; break;
					case 2: ans = ans + "two "; break;
					case 3: ans = ans + "three "; break;
					case 4: ans = ans + "four "; break;
					case 5: ans = ans + "five "; break;
					case 6: ans = ans + "six "; break;
					case 7: ans = ans + "seven "; break;
					case 8: ans = ans + "eight "; break;
					case 9: ans = ans + "nine "; break;
				}
				ans = ans + "thousand ";
				number = number - (Math.floor(number/1000) * 1000);
			} else if(thous == 1){
				ans = ans + "thousand ";
			}
			
			if(number % 100 != number){
				switch(Math.floor(number/100)){
					case 1: ans = ans + "one hundred "; break;
					case 2: ans = ans + "two hundred "; break;
					case 3: ans = ans + "three hundred "; break;
					case 4: ans = ans + "four hundred "; break;
					case 5: ans = ans + "five hundred "; break;
					case 6: ans = ans + "six hundred "; break;
					case 7: ans = ans + "seven hundred "; break;
					case 8: ans = ans + "eight hundred "; break;
					case 9: ans = ans + "nine hundred "; break;
				}
				number = number - (Math.floor(number/100) * 100);
			}
			
			if(number % 10 != number){
				switch(Math.floor(number/10)){
					case 1: var temp = number;
							temp = number - (Math.floor(number/10) * 10);
							if(Math.floor(temp % 1) == temp){
								ans = ans + "ten "; 
								break;
							} else{
								switch(Math.floor(temp/1)){
									case 1: ans = ans + "eleven "; break;
									case 2: ans = ans + "twelve "; break;
									case 3: ans = ans + "thirteen "; break;
									case 4: ans = ans + "fourteen"; break;
									case 5: ans = ans + "fifteen "; break;
									case 6: ans = ans + "sixteen "; break;
									case 7: ans = ans + "seventeen "; break;
									case 8: ans = ans + "eighteen "; break;
									case 9: ans = ans + "nineteen "; break;
								}
								temp = temp - (Math.floor(temp/1) * 1);
								number = temp;
								break;
							}
					case 2: ans = ans + "twenty "; break;
					case 3: ans = ans + "thirty "; break;
					case 4: ans = ans + "forty "; break;
					case 5: ans = ans + "fifty "; break;
					case 6: ans = ans + "sixty "; break;
					case 7: ans = ans + "seventy "; break;
					case 8: ans = ans + "eighty "; break;
					case 9: ans = ans + "ninety "; break;
				}
				number = number - (Math.floor(number/10) * 10);
			}
			
			switch(number){
				case 1: ans = ans + "one "; break;
				case 2: ans = ans + "two "; break;
				case 3: ans = ans + "three "; break;
				case 4: ans = ans + "four "; break;
				case 5: ans = ans + "five "; break;
				case 6: ans = ans + "six "; break;
				case 7: ans = ans + "seven "; break;
				case 8: ans = ans + "eight "; break;
				case 9: ans = ans + "nine "; break;
			}
			number = number - number;
		}
	
	} else {
		return "Invalid Input. (Min: 0, Max: 1000000)";
	}
	
	if(number == 0){
		return ans;
	}	
}

/*
	Input: Number in words (Min: 0, Max: 1000000)
	Output: the output is stored in variable ans			  
	
	This function transforms the number in word form into numerical form.
*/
function wordsToNum(numberword){
	// transforms all letters to lowercase
	numberword = numberword.toLowerCase();
	// the input becomes an array of words
	numberword = numberword.split(" ");
	var numberwordLen = numberword.length;
	var ans = 0;
	
	for(var ctr = 0; ctr < numberwordLen; ctr++){
		if(numberword[ctr] == "million" && numberwordLen == 1){
			return "Error";
		} else if(numberword[ctr] == "thousand" && numberwordLen == 1){
			return "Error";
		} if(numberword[ctr] == "hundred" && numberwordLen == 1){
			return "Error";
		} else {
			//checks the place value of the number
			var mul = 0;
			if(numberword[ctr+1] == "million"){
				if(numberword[ctr] == "one" || numberword[ctr] == "zero"){
					mul = 1000000;
				} else{
					return "Max input should be one million";
				}
			} else if(numberword[ctr+1] == "thousand"){
				mul = 1000;
			} else if(numberword[ctr+1] == "hundred"){
				if(numberword[ctr+3] == "thousand"){
					mul = 100000;
				} else if(numberword[ctr+4] == "thousand"){
					mul = 100000;
				} else {
					mul = 100
				}
			} else{
				if(numberword[ctr+2] == "million"){
					mul = 1000000;
				} else if(numberword[ctr+2] == "thousand"){
					mul = 1000;
				} else if(numberword[ctr+2] == "hundred"){
					if(numberword[ctr+4] == "thousand"){
						mul = 100000;
					} else{
						mul = 100
					}
				} else{
					mul = 1;
				}
			} 
		
			switch(numberword[ctr]){
				case "zero"     : ans = 0; break;
				case "one"      : ans = ans + (1 * mul); break;
				case "two"      : ans = ans + (2 * mul); break;
				case "three"    : ans = ans + (3 * mul); break;
				case "four"     : ans = ans + (4 * mul); break;
				case "five"     : ans = ans + (5 * mul); break;
				case "six"      : ans = ans + (6 * mul); break;
				case "seven"    : ans = ans + (7 * mul); break;
				case "eight"    : ans = ans + (8 * mul); break;
				case "nine"	    : ans = ans + (9 * mul); break;
				case "ten"	    : if(mul != 100) ans = ans + (10 * mul);
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "eleven"   : if(mul != 100) ans = ans + (11 * mul);
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "twelve"   : if(mul != 100) ans = ans + (12 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "thirteen" : if(mul != 100) ans = ans + (13 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "fourteen" : if(mul != 100) ans = ans + (14 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "fifteen"  : if(mul != 100) ans = ans + (15 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "sixteen"  : if(mul != 100) ans = ans + (16 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "seventeen": if(mul != 100) ans = ans + (17 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "eighteen" : if(mul != 100) ans = ans + (18 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "nineteen" : if(mul != 100) ans = ans + (19 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "twenty"   : if(mul != 100) ans = ans + (20 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "thirty"   : if(mul != 100) ans = ans + (30 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "forty"	: if(mul != 100) ans = ans + (40 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "fifty"	: if(mul != 100) ans = ans + (50 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "sixty"	: if(mul != 100) ans = ans + (60 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "seventy"	: if(mul != 100) ans = ans + (70 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "eighty"	: if(mul != 100) ans = ans + (80 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
				case "ninety"	: if(mul != 100) ans = ans + (90 * mul); 
								  else return "ERROR: hundreds --> [1-9] hundred only";
								  break;
			}
		}
	}

	//checks if input is from 0 to 1000000 else error
	if(ans <= 1000000 && ans >= 0){	
		return ans;
	} else{
		return "Error: Max number is 1000000.";
	}
}

/*
	Inputs: Number in words (Min: 0, Max: 1000000)
			Currency (JPY, PHP, USD ONLY)
	Output: the output is stored in variable ans			  
	
	This function transforms the number in word form into numerical form
	with its currency as prefix.
*/
function wordsToCurrency(numberword, currency){
	var possibleCur = ["JPY", "PHP", "USD"];
	var ctr;
	var ans = "";
	for(ctr = 0; ctr < possibleCur.length; ctr++){
		if(possibleCur[ctr] == currency){
			break;
		}
	}
	
	if(ctr == possibleCur.length){
		return "Invalid Currency";
	} else{
		ans = currency + wordsToNum(numberword);
	}
	
	return ans;
}

/*
	Inputs: number to be delimited (Minimum of 0 and Maximum of 1000000),
			the delimiter (should be single character), 
			the number of jumps when will the delimiter should appear
	Output: the output is stored in variable ans			  
	
	This function delimits the number with the given delimiter.
	The delimiter will appear depending on the number of jumps given by the user
		(from right most digit up to leftmost digit).
*/
function numberDelimited(number, delimiter, jump){

	// variable ans will be the accumulator of the digits and/or the delimiter.
	var ans = "";
	
	if(number <= 1000000 && number >= 0){
		if(delimiter.length == 1){
			if(jump > 0){
				// converts number to an array of characters
				number = number.toString();;
				var numLen = number.length;
				
				for(var ctr = 0; ctr < numLen; ctr++){
					if((numLen - 1 - ctr) % jump == 0 && (numLen - 1 - ctr) > 0){
						ans = ans + number[ctr] + delimiter; 
					} else{
						ans = ans + number[ctr];
					}
				}
			} else{
				ans = "Number of jumps should be positive.";
			}
		} else{
			ans = "Delimiter should be a single character.";
		}
	} else{
		ans = "Input number out of range. \n MIN: 0 \n MAX: 1000000";
	}
	
	return ans;
}
