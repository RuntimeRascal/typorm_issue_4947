import * as express from 'express';
import { homeCtrl, aboutCtrl } from './controllers';

const app = express();
const port = 8080;

app.get('/', homeCtrl);
app.get('/about', aboutCtrl);

app.listen(port, () => console.log(`Typescript app listening on port ${port}!`));