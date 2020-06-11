const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {

    if(req.url === "/" || req.url === "/cards" && req.method === "GET")
    {
        //read home page html
        fs.readFile("public/home/homePage.html", "utf8", function (err1, homePage_htmlData) {
            if(err1)
            {
                console.log(err1);
            }
            else
            {
                res.write(homePage_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/homePage.css" && req.method === "GET")
    {
        //read home page css
        fs.readFile("public/home/homePage.css", "utf8", function (err2, homePage_cssData) {
            if(err2)
            {
                console.log(err2);
            }
            else
            {
                res.write(homePage_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/homePage.js" && req.method === "GET")
    {
        //read home page js
        fs.readFile("public/home/homePage.js", "utf8", function (err3, homePage_jsData) {
            if(err3)
            {
                console.log(err3);
            }
            else
            {
                res.write(homePage_jsData);
                res.end();
            }
        })
    }
    else if(req.url === "/images/1.jpg" && req.method === "GET")
    {
        //read image 1
        fs.readFile("public/images/1.jpg", function (err4, image1Data) {
            if(err4)
            {
                console.log(err4);
            }
            else
            {
                res.write(image1Data);
                res.end();
            }
        })
    }
    else if(req.url === "/images/2.jpg" && req.method === "GET")
    {
        //read image 2
        fs.readFile("public/images/2.jpg", function (err5, image2Data) {
            if(err5)
            {
                console.log(err5);
            }
            else
            {
                res.write(image2Data);
                res.end();
            }
        })
    }
    else if(req.url === "/images/3.jpg" && req.method === "GET")
    {
        //read image 3
        fs.readFile("public/images/3.jpg", function (err6, image3Data) {
            if(err6)
            {
                console.log(err6);
            }
            else
            {
                res.write(image3Data);
                res.end();
            }
        })
    }
    else if(req.url === "/images/4.jpg" && req.method === "GET")
    {
        //read image 4
        fs.readFile("public/images/4.jpg", function (err7, image4Data) {
            if(err7)
            {
                console.log(err7);
            }
            else
            {
                res.write(image4Data);
                res.end();
            }
        })
    }
    else if(req.url === "/images/5.jpg" && req.method === "GET")
    {
        //read image 5
        fs.readFile("public/images/5.jpg", function (err8, image5Data) {
            if(err8)
            {
                console.log(err8);
            }
            else
            {
                res.write(image5Data);
                res.end();
            }
        })
    }
    else if(req.url === "/images/6.jpg" && req.method === "GET")
    {
        //read image 6
        fs.readFile("public/images/6.jpg", function (err9, image6Data) {
            if(err9)
            {
                console.log(err9);
            }
            else
            {
                res.write(image6Data);
                res.end();
            }
        })
    }
    else if(req.url === "/aboutPage" && req.method === "GET")
    {
        // read about page
        fs.readFile("public/about/aboutPage.html", "utf8", function (err10, aboutPage_htmlData) {
            if(err10)
            {
                console.log(err10);
            }
            else
            {
                res.write(aboutPage_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/aboutPage.css" && req.method === "GET")
    {
        // read about page css
        fs.readFile("public/about/aboutPage.css", "utf8", function (err11, aboutPage_cssData) {
            if(err11)
            {
                console.log(err11);
            }
            else
            {
                res.write(aboutPage_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/contactPage" && req.method === "GET")
    {
        // read contact page html
        fs.readFile("public/contact/contactPage.html", "utf8", function (err12, contactPage_htmlData) {
            if(err12)
            {
                console.log(err12);
            }
            else
            {
                res.write(contactPage_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/contactPage.css" && req.method === "GET")
    {
        // read contact page css
        fs.readFile("public/contact/contactPage.css", "utf8", function (err13, contactPage_cssData) {
            if(err13)
            {
                console.log(err13);
            }
            else
            {
                res.write(contactPage_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card1" && req.method === "GET")
    {
        // read card1 page html
        fs.readFile("public/card1/cardPage1.html", "utf8", function (err14, cardPage1_htmlData) {
            if(err14)
            {
                console.log(err14);
            }
            else
            {
                res.write(cardPage1_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage1.css" && req.method === "GET")
    {
        // read card1 page html
        fs.readFile("public/card1/cardPage1.css", "utf8", function (err15, cardPage1_cssData) {
            if(err15)
            {
                console.log(err15);
            }
            else
            {
                res.write(cardPage1_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card2" && req.method === "GET")
    {
        // read card2 page html
        fs.readFile("public/card2/cardPage2.html", "utf8", function (err16, cardPage2_htmlData) {
            if(err16)
            {
                console.log(err16);
            }
            else
            {
                res.write(cardPage2_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage2.css" && req.method === "GET")
    {
        // read card2 page css
        fs.readFile("public/card2/cardPage2.css", "utf8", function (err17, cardPage2_cssData) {
            if(err17)
            {
                console.log(err17);
            }
            else
            {
                res.write(cardPage2_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card3" && req.method === "GET")
    {
        // read card3 page html
        fs.readFile("public/card3/cardPage3.html", "utf8", function (err18, cardPage3_htmlData) {
            if(err18)
            {
                console.log(err18);
            }
            else
            {
                res.write(cardPage3_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage3.css" && req.method === "GET")
    {
        // read card3 page css
        fs.readFile("public/card3/cardPage3.css", "utf8", function (err19, cardPage3_cssData) {
            if(err19)
            {
                console.log(err19);
            }
            else
            {
                res.write(cardPage3_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card4" && req.method === "GET")
    {
        // read card4 page html
        fs.readFile("public/card4/cardPage4.html", "utf8", function (err20, cardPage4_htmlData) {
            if(err20)
            {
                console.log(err20);
            }
            else
            {
                res.write(cardPage4_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage4.css" && req.method === "GET")
    {
        // read card4 page css
        fs.readFile("public/card4/cardPage4.css", "utf8", function (err21, cardPage4_cssData) {
            if(err21)
            {
                console.log(err21);
            }
            else
            {
                res.write(cardPage4_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card5" && req.method === "GET")
    {
        // read card5 page html
        fs.readFile("public/card5/cardPage5.html", "utf8", function (err22, cardPage5_htmlData) {
            if(err22)
            {
                console.log(err22);
            }
            else
            {
                res.write(cardPage5_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage5.css" && req.method === "GET")
    {
        // read card5 page css
        fs.readFile("public/card5/cardPage5.css", "utf8", function (err23, cardPage5_cssData) {
            if(err23)
            {
                console.log(err23);
            }
            else
            {
                res.write(cardPage5_cssData);
                res.end();
            }
        })
    }
    else if(req.url === "/card6" && req.method === "GET")
    {
        // read card6 page html
        fs.readFile("public/card6/cardPage6.html", "utf8", function (err24, cardPage6_htmlData) {
            if(err24)
            {
                console.log(err24);
            }
            else
            {
                res.write(cardPage6_htmlData);
                res.end();
            }
        })
    }
    else if(req.url === "/cardPage6.css" && req.method === "GET")
    {
        // read card6 page css
        fs.readFile("public/card6/cardPage6.css", "utf8", function (err25, cardPage6_cssData) {
            if(err25)
            {
                console.log(err25);
            }
            else
            {
                res.write(cardPage6_cssData);
                res.end();
            }
        })
    }
    else
    {
        res.write("<h1>Page Not Found.</h1>");
        res.end();
    }

}).listen("3000");

console.log("server run on port 3000");
