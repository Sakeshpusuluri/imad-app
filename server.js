var express=require('express');
var morgan=require('morgan');
var path=require('path');
var app=express();
app.use(morgan('combined'));
app.get('/',function(req,res){
    res.sendFile(path,join(_dirname,'ui',index.html));
});
var articleone={
    title:'Articleone',
    heading:'Article-one Console',
    date:'Feb 24 2018',
    content:`
            <p>I want to be a traveller.. So, Frikingbad.........</p>
            <p> I want to be a traveller.. So, Frikingbad.........</p>
            <p> I want to be a traveller.. So, Frikingbad.........</p>
    `
};
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.data;
    
var htmltemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width; intial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
         <div>
        <a href="/">HOME</a>
        <hr>
        </div>
        <div>
        <h1>${heading}</h1>
        </div>
        <div>
        <p> ${Date}</p>
        </div>
      
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmltemplate;
}
app.get('/article-one',function(req,res){
    res.send(createtemplate(articleone));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
 app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'article-three.html'));
 });
 
app.get('/article-two',function(req,res){
    res.send('Article two is requested and will be served here');
});
app.get('/article-three',function(req,res){
    res.send('Article three is requested and will be served here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
