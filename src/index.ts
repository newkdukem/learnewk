import * as express from 'express';
import * as math from './math';

let app = express();

let todos = [
	{
		'id': '1',
		'title': 'Naslov',
		'description': 'Kratok opis'
	}
];

app.get('/', (req, res) => res.end(JSON.stringify(todos, null, 2)));

app.post('/', (req, res) => res.end())

app.listen(3000, () => console.log('Log!'));
