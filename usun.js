let exercise: "Write a function to check whether an 'input' is a date object or not."

const checkIfIsDate = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]") {
        return true
    } else return false
}

console.log