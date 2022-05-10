const http = require("http");
const fs = require("fs");


let gettime = function () {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  return `${hour}:${minute}'"`
}

http.createServer(function (request, response) {

  let header = fs.readFileSync(__dirname + "/header.html", "utf8",)
  let menu = fs.readFileSync(__dirname + "/menu.html", "utf8")
  let footer = fs.readFileSync(__dirname + "/footer.html", "utf8")
  let replace = newFunction()

  if (request.url === "/index" || request.url === "/") {
    fs.readFile(__dirname+"/website/firstvideogames.html", "utf8", function (error, data){
      if(error){response.statusCode = 404; response.end("Error 404, not found!!!");}
      else{
        replace(data);
      }
    });
  }
  else {
    const filePath = __dirname + "\\website\\" + request.url.substr(1);
    fs.readFile(filePath, "utf8", function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Error 404, not found!!!");
      }
      else {
        replace(data);
        console.log("Успешно загружено: "+filePath)
      }
    });
  }

  console.log(`${gettime()}: Запрошенный адрес: ${request.url}`);

  function newFunction() {
    return function (body) {
      fs.readFile("shablon.html", "utf8", function (_error, data) {
        //response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
        data = data.replace("{header}", header).replace("{menu}", menu).replace("{body}", body).replace("{footer}", footer);
        response.end(data);
      });
    };
  }

}).listen(3000, () => {
  console.log("Сервер запущен. Порт 3000")
});
