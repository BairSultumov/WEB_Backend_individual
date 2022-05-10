var url2 = [{
    1: '#Первые видеоигры',
    2: 'Сл 1-Игры',
    3: 'Первые видеоигры',
    4: 'blue'
    },

    {
    1: '#Action',
    2: 'Случ Экшегн',
    3: 'Action',
    4: 'purple'
    },

    {
    1: '#Платформеры',
    2: 'Случ Платформеры',
    3: 'Платформеры',
    4: 'green'
    },

    {
    1: '#Шутеры',
    2: 'СЛУЧ Шутеры',
    3: 'Шутеры',
    4: 'red'
    },
    
    ]
    
    var url = [];
    
    function create() {
    var menu = document.querySelector('.RndNavigate');
    var a = document.createElement('a');
    url = url2[Math.floor(Math.random() * url2.length)]
    a.href = url[1];
    a.innerHTML = url[2];
    a.title = url[3];
    a.className = url[4];
    menu.appendChild(a);
    }
    
    create();