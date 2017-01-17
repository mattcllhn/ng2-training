var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (msg) {
        if (msg === void 0) { msg = "whazzap"; }
        return msg + 'you face';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('helly');
//# sourceMappingURL=magic.js.map