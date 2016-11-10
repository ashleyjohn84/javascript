var MyCompany = MyCompany || {};
(function (context){
    //private property
    var id;
    //public methods
    context.Person = function(name,age)
    {
        this.name = name;
        this.age = age;
        generateId();
    }
    context.Person.prototype.printAge = function()
    {
        console.log(this.name +" is "+ this.age+" years old");
        console.log(this.name +" has id = "+ id);
    }
    //private method
    function generateId()
    {
        id = Math.floor((Math.random() * 10) + 1);
    }

}
)(MyCompany);

var person = new MyCompany.Person("Ashley John",31);
person.printAge();