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
      name: 'user1'
    },
    {
      id: '2',
      name: 'user2'
    },
    {
      id: '3',
      name: 'user3'
    },
    {
      id: '4',
      name: 'user4'
    },
    {
      id: '5',
      name: 'user5'
    },
    {
      id: '6',
      name: 'user6'
    },
    {
      id: '7',
      name: 'user7'
    },
    {
      id: '8',
      name: 'user8'
    }
  ];
});

app.use(cors());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));
