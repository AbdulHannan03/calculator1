function getNumber(num) {

    var result = document.getElementById("result");
    var lastinput = result.value.slice(result.value.length - 1);
    var operators = ("+", "-", "/", "*")
    if (operators.indexOf(lastinput) !== -1 && operators.indexOf(num) !== -1) {
    }
    result.value += num;

}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}
function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}