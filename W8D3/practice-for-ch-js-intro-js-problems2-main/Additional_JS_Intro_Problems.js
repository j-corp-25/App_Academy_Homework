// function titleize(name,Callback) {
//     this.name = name
//     Array.prototype.map; {


//     }

// }
function titleize(names, callback) {
    var titleizeNames = names.map(function (name) {
        return "Mx. " + name + " Jingleheimer Schmidt";

    });
    titleizeNames.forEach(callback);


}


function printCallback(name) {
    console.log(name);
}


titleize(["Mary", "Brian", "Leo"], printCallback);
