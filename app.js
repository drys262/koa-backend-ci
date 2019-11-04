const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('koa-cors');
const app = new Koa();
const router = new Router();
const port = process.env.PORT || 80;

router.get('/users', (ctx, next) => {
  ctx.body = [
    {
      id: '1',
      name: 'First user'
    },
    {
      id: '2',
      name: 'Second user'
    },
    {
      id: '3',
      name: 'Third user'
    },
    {
      id: '4',
      name: 'Fourth user'
    },
    {
      id: '5',
      name: 'Fifth user'
    }
  ];
});

app.use(cors());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));
