module.exports = function toReadable(number) {
    let belowTen = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let belowTwenty = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let belowHundred = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }

    let result = "";
    if (number < 10) {
        result += belowTen[number];
    } else if (number < 20) {
        result += belowTwenty[number - 10].trim();
    } else if (number < 100) {
        let remainderHundred = toReadable(number % 10).toLowerCase();
        result +=
            belowHundred[Math.floor(number / 10)] +
            (number % 10 !== 0 ? " " + remainderHundred : "");
    } else if (number < 1000) {
        result +=
            belowTen[Math.floor(number / 100)] +
            " hundred " +
            (number % 100 !== 0 ? toReadable(number % 100).toLowerCase() : "");
    }
    return result.trim();
};
