var randomArr = ["Первые видеоигры", "Action", "Платформеры", "Шутеры", "Файтинги", "Beat-em", "Стелс-экшен"
    , "Выживание", "Ритм-игра", "Action-Adventure"]

var html = "<li><a href=\"#" + randomArr[Math.round(Math.random() * randomArr.length)] + "\">Случайная гиперссылка(6)</a></li>"
document.getElementById('random_adress').innerHTML = html;


var color = ["green", "blue", "crimson", "hotpink", "coral", "tomato", 
"orange", "gold", "aqua", "DarkSlateGray", "DimGray","Maroon","Olive","Teal","Navy"]
let style=color[Math.round(Math.random()*color.length)]

document.body.style.backgroundColor = style
console.log("body: "+style);