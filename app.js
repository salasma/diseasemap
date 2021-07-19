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
	res.render('home', {layout : 'main'});
});
app.get('/profile', (req, res) => {
	res.render('profile', {layout : 'main'});
});
app.get('/signup', (req, res) => {
	res.render('usersignup', {layout : 'main'});
});
app.get('/loggedin', (req, res) => {
	res.render('loggedin', {layout : 'main'});
});

app.listen(1499)
