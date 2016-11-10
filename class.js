
/*
Creating a class in javascript -- mimics class in OOP languages
*/
var Person = (function (){
    function Person(name)
    {
        this.name = name;
    }
    Person.prototype.sayHello = function (){
        console.log("Hello "+this.name);
    }
    return Person;
})();

var person = new Person("Ashley John");
person.sayHello();

/*
    Namespaces in javascript

*/

var MyCompany = MyCompany || {};
(function (context){
    //private field
    var id = 0; 

    //Public field
    context.globalId = id;

    context.printId = function ()
    {
        console.log(id);
    }
}
)(MyCompany);