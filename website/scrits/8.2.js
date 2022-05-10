let div = document.createElement('div')
var contact = document.querySelector('.contact');

div.className = 'div_table'
contact.appendChild(div)

let table = document.createElement('table');
div.appendChild(table)

Object.assign(table.style, {
    //backgroundColor: 'red',
    width: '400px',
    border: '2px solid black'
});

class User {
    create() {
        var l = 0;
        if (l == 0) {
            var header = table.createTHead();
            var row = header.insertRow(0);
            var cell = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell.innerHTML = "Название";
            cell2.innerHTML = "Тип";
            cell3.innerHTML = "Год";

            Object.assign(row.style, {
                border: '2px solid black'
            });

            l++;
        }
    }
    constructor(name, family, age, color) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.color = color;
    }
    print = function () {
        var row = table.insertRow(-1);
        var one = row.insertCell(0);
        var two = row.insertCell(1);
        var free = row.insertCell(2);
        one.innerHTML = this.name
        two.innerHTML = this.family
        free.innerHTML = this.age
    }
}
var a = new User().create();
const myFather = new User("Братство Доминиона", "Клиентская ", 2019, "blue").print();
var myFather2 = new User("Omega Tanks", "Браузерная", 2010, "blue").print();
var myFather3 = new User("Оружие Богини", "Клиентская ", 2005, "blue").print();
var myFather4 = new User("Кодекс Пирата", "Клиентская ", 1999, "blue").print();