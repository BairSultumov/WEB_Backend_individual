
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        if(minutes%2==0)
            document.getElementById('Task_desk').innerHTML= 'Компьютерные игры по жанрам'
        else
        document.getElementById('Task_desk').innerHTML= 'Мое имя'

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

     /* каждую секунду получаем текущую дату и время */
    /* и вставляем значение в блок с id "current_date_time_block2" */
    setInterval(function () {
        document.getElementById('current_date_time_block').innerHTML = date_time();
    }, 100);