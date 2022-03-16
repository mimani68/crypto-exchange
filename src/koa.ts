import Koa from 'koa';
import Router from '@koa/router';

import { ExchangeBuilder, ExchangeProxy, ENUM, IExchange } from "@baas/exchange"

let exchange: IExchange;

// Direct generating exchange
// exchange = new ExchangeProxy()
// exchange.setLicense("aiPh,uThaEx(ut'o9zu#ka6e8f~um1sQh7Zogh)a8xAhR[e")
// exchange.loadConfigFile("./my-config.json")
// exchange.setDefaultLanguage("en")
// exchange.setTimezone("Asia/Tehran")
// exchange.setConfig(ENUM.config.BTC_MAX_DAILY_TRANSFER, 0.0002)
// exchange.setConfig(ENUM.config.STOP_LOST, 0.0001)
// exchange.setBlockchainDriver({})
// exchange.swagger(true, '/docs/api/v1')
// exchange.setDataBase(ENUM.database.POSTGRES, "postgres://admin:123@pg1:5432")
// exchange.setDataBaseMirror(ENUM.database.POSTGRES, "postgres://admin:123@pg2:5432")
// exchange.setCache(ENUM.cache.REDIS, "redis://redis:6037")
// exchange.setLogDriver(console)
// exchange.setRemoteLogCollector(ENUM.logServer.RSYS_LOG, "udp://rsyslog:517")
// exchange.setPolicy(ENUM.policy.BTC_DAILY_WITHDRAW, 0.25)
// exchange.start()

// Using fast builder exchange in Mode ["default", "simple", "advanced"]
let exchangeGenerator = new ExchangeBuilder("default")
exchange = exchangeGenerator.getExchangeInstance()

const app = new Koa();
const router = new Router();

router.use(async (ctx: any, next: Koa.Next) => {
    exchange.resetUser()
    exchange.profile.setProfile("bib993h8-fn39v-oh-8928735", "mimani68")
    next()

});

router.post('/transfer', async (ctx: any) => {
    let result = await exchange.wallet.transfer(ctx.request.fromToken, ctx.request.toToken, ctx.request.amount)
    let response = {
        success: true,
        data: result
    }
    ctx.body = response
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);