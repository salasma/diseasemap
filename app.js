const Express = require("express")
const handlebars = require('express-handlebars');
const mysql = require("mysql")
const bodyParser = require("body-parser")
const pool = mysql.createPool({
	connectionLimit : 10,
	host: 'classmysql.engr.oregonstate.edu',
	user: 'cs340_salasma',
	password: '4183',
	database:"cs340_salasma"
})



const app = Express()
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({layoutsDir: __dirname + '/views/layouts',}));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	res.render('main', {layout : 'index'});
});

app.get('/profile',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/contact.html')	
})

app.get('/loggedin',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/loggedin.html')	
})
app.get('/signup',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/usersignup.html')	
})

app.listen(1499)
