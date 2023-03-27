import express from 'express';
import { config } from './config/express';
import { init } from './config/routes';

export const start = (port: number) => {
const app = express();

config(app);
init(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
}