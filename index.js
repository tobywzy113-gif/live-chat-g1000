import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


app.use(express.static(path.join(dirname, 'public')));

app.listen(3000, () => {
    console.log('server started')
});