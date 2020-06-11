const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    
    if(req.url === "/login" && req.method === "GET")
    {
        fs.readFile("public/loginPage.html", "utf8", function (err1, htmlLoginPageData) {//read login page html
            if(err1)
            {
                console.log(err1);
            }
            else
            {
                res.write(htmlLoginPageData);
                res.end();
            }
        })
    }
    else if(req.url === "/loginPage.css" && req.method === "GET")//read login page css
    {
        fs.readFile("public/loginPage.css", "utf8", function (err2, cssLoginPageData) {
            if(err2)
            {
                console.log(err2);
            }
            else
            {
                res.write(cssLoginPageData);
                res.end();
            }
        })
    }
    else if(req.url === "/loginPage.js" && req.method === "GET")// read login page js
    {
        fs.readFile("public/loginPage.js", "utf8", function (err3, jsLoginPageData) {
            if(err3)
            {
                console.log(err3);
            }
            else
            {
                res.write(jsLoginPageData);
                res.end();
            }
        })
    }
    else if(req.url === "/ghayegh.jpg" && req.method === "GET")// read image file for loginPage backGround 
    {
        fs.readFile("public/ghayegh.jpg", function (err4, imageData) {
            if(err4)
            {
                console.log(err4);
            }
            else
            {
                res.write(imageData);
                res.end();
            }
        })
    }
    else if(req.url === "/login/submit" && req.method === "POST")
    {
        //read user and pass of request object that client sent it with POST method
        let requestData;
        req.on('data', function(chunk) {
            console.log("Received body data:");
            requestData = chunk.toString();
            console.log(requestData);
        })

        /**
         * read json file
         * create a string of user and pass of json file
         * compair with request data string
         */
        fs.readFile("tools/users.json", "utf8", function (err5, usersData) {
            if(err5)
            {
                console.log(err5);
            }
            else
            {
                //first get userData from users file json at String frame
                usersData = JSON.parse( usersData );//first convert userDate from string to object
                console.log(usersData);
                let find = false;
                for(let i = 0; i < usersData.length && find === false; i++)
                {
                    let stringOfUserData = "user=" + usersData[i].userName + "&pass=" + usersData[i].password;// create a sentence of userDataPass & User for compair whitd request data example sentence that we creat = (user=Pooya&pass=5050)

                    if( stringOfUserData.localeCompare(requestData) === 0 )//checking the sentence that we created with sentence that request sent to server
                    {
                        console.log("ok");
                        res.write("true");
                        res.end();
                        find = true;
                    }
                }
                if(find === false)
                {
                    console.log("no");
                    res.write("false");
                    res.end();
                }
            }
        })
    }
    else 
    {
        res.write("<h1>Page NotFound.</h1>");
        res.end();
    }

}).listen("5005");

console.log("server started on port:5005");