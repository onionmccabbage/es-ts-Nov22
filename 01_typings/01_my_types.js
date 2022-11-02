var a = 1; // this is TypeScript - infer the type (recommended practice)
var b = 2; // we can be explicit with types
a = 99;
// a = 'oops' // nope - TS insists its a number
{ // here is a code block - a separate scope
    var a_1 = 'ok'; // this 'a' is infered to be a string type
    var b_1 = 'immutable constant';
    // there are many JS types number, string, boolean, array, object
    // typescript adds types for void and any
    var c = 1;
    c = 'three'; // so why bother typing it then?
    var k = 'Protozoa';
    var r = false;
    // r = true
}
{
    // creating enumeration types - enum
    var BoxSize = void 0;
    (function (BoxSize) {
        BoxSize[BoxSize["Small"] = 0] = "Small";
        BoxSize[BoxSize["Medium"] = 1] = "Medium"; // 
    })(BoxSize || (BoxSize = {}));
    var c = BoxSize.Large; // it looks ahead
    // enums are extendable
    (function (BoxSize) {
        BoxSize[BoxSize["Large"] = 2] = "Large";
        BoxSize[BoxSize["XLarge"] = 3] = "XLarge"; // implicitly 3
    })(BoxSize || (BoxSize = {}));
    // here the variable type can only be 'BoxSize'
    var boxType = BoxSize.Medium; // i.e. 1
}
