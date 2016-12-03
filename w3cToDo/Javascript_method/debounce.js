/*
    @ func
    @ delay
*/

function debounce(func, delay) {
    var asyncId;
    return function() {
        if(!asyncId) {
            asyncId = setTimeout(func, delay);
        }
        else asyncId.clearTimeout();
    }
}
