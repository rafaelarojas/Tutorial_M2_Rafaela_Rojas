const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbUser.db';

const hostname = '127.0.0.1';
const port = 3071;
const app = express();

/* Servidor aplicação */

app.use(express.static("html"));
/* Definição dos endpoints */

/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM descricao ORDER BY id';
	db.all(sql, [], (err, rows) => {
	  if (err) {
		throw err;
	  }
  
	  const numClicks = req.query.numClicks || 0;
	  const descriptions = rows.slice(0, numClicks).map(row => row.descricao);
	  res.json(descriptions);
	});
	db.close(); // Fecha o banco
  });
  

app.listen(port, hostname, () => {
    console.log(`Page server running at http://${hostname}:${port}/`);
  });