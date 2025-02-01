import express from 'express';
import helloRouter from './routes';

const app = express();
const port = 3000;

app.use(express.json()); // 解析 JSON 请求体
app.use('/api', helloRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
