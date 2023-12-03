// --- PALINDROME ---

// --- calling palindromeCheck() (which manipulates DOM) if palidrome CHECK button is CLICKED ----

document.getElementById("check-palindrome").onclick = function() { palindromeCheck()}

//---- calling palindromeCheck() (which manipulates DOM) if palidrome INPUT FIELD ACTIVE and ENTER PRESSED ----

document.getElementById("palindrome-str").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        palindromeCheck();
    }
})


// ---- palindromeCheck() function to manipulate DOM with results of palindrome()function -----

function palindromeCheck() {
    const strPreWrap = document.getElementById("palindrome-str").value; 
    const wrappedStr = "" + strPreWrap;
    const check = palindrome(wrappedStr);

    if (wrappedStr === "") {
        return window.alert("Well I guess if you leave it empty then thats the same backwards or forwards...  You could also try entering a word or phrase :)")
    } else if (check) {
        document.getElementById("palindrome-answer").innerText = "Yes!";
        document.getElementById("is-or-not").innerText = "It is a palindrome.";
        document.getElementById("palindrome-reveal").classList.add("add-class-reveal");
        document.getElementById("palindrome-reveal").style.display = "flex";
        document.getElementById("palindrome-reveal").style.visibility = "visible";
        return; 
    } else {
        document.getElementById("palindrome-answer").innerText = "No!";
        document.getElementById("is-or-not").innerText = "It is not a palindrome.";
        document.getElementById("palindrome-reveal").classList.add("add-class-reveal");
        document.getElementById("palindrome-reveal").style.display = "flex";
        document.getElementById("palindrome-reveal").style.visibility = "visible";
        return; 
    }
}



// --- PALINDROME FUNCTION --------

function palindrome(str) {

    const alphaArr = str.split('').filter((char) => /[a-z0-9]/i.test(char));
    
    const reverseArr = alphaArr.toReversed();
    

    const alphaStr = alphaArr.join('').toLowerCase();
    
    const reverseStr = reverseArr.join('').toLowerCase();
    
   
    return reverseStr === alphaStr;
    }


// --- ROMAN NUMERALS ---

// --- calling romanCheck() (which manipulates DOM) if roman CHECK button is CLICKED ----

document.getElementById("roman-convert").onclick = function() { romanCheck()}

//---- calling romanCheck() (which manipulates DOM) if roman INPUT FIELD ACTIVE and ENTER PRESSED ----

document.getElementById("number-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        romanCheck();
    }
})

// --- romanCheck() function to manipulate DOM with results of ()convertToRoman() function -----

function romanCheck() {
    const numInput = document.getElementById("number-input").value; 
    const numParse = parseInt(numInput);
    const romanCheck = convertToRoman(numParse);
    console.log(numInput);

    if (typeof romanCheck === "" || isNaN(numParse)) {
        return window.alert("That's not a number! Please enter a whole number using numerical digits.")
    } else {
        document.getElementById("num-in-roman").innerText = `${numParse} in roman numerals is...`;
        document.getElementById("roman-result").innerText = `${romanCheck}`;
        document.getElementById("roman-reveal").classList.add("add-class-reveal");
        document.getElementById("roman-reveal").style.display = "flex";
        document.getElementById("roman-reveal").style.visibility = "visible"; 
        return;
    }
}


// ----- ROMAN NUMERALS FUNCTION -----

function convertToRoman(num) {

    const romanNums = [

        ["M", null, null],

        ["C", "D", "M"],

        ["X", "L", "C"],

        ["I", "V", "X"]

    ];
    
    
    const numArr = num.toString().split('');

    const romanArr = numArr.map(convert)

    

    function convert(digit, indexOfDigit, array) {

        let numeral = []

        const currentRomNest= romanNums.length - (array.length - indexOfDigit);

    

        for (let i = 1; i <= digit; i++) {

            if (i <= 3 || i >= 6 && i <= 8) {

                numeral.push(romanNums[currentRomNest][0])

            } else if (i === 4 || i === 9) {

                const indexCurrentLetter = romanNums[currentRomNest].indexOf(numeral[0]);

                const nextLetter = romanNums[currentRomNest][indexCurrentLetter + 1]

    

                numeral.push(nextLetter)

                numeral = numeral.slice(-2)

    

            } else if (i === 5) {

                numeral.splice(0, 1);

            }
        }



        return numeral.join('');

         }

    return romanArr.join('');

};

