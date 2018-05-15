#### Installation
``
npm install crawler-detect
``

#### Usage

```javascript

const CrawlerDetect = require('crawler-detect');

// Pass a user agent as a string
if (CrawlerDetect.isCrawler('Mozilla/5.0 (compatible; Sosospider/2.0; +http://help.soso.com/webspider.htm)')) {
    console.log('crawler user agent detected');
}

// Get the name of the bot that matched (if any)
CrawlerDetect.isCrawler('Mozilla/5.0 (compatible; Sosospider/2.0; +http://help.soso.com/webspider.htm)', (isCrawler, userAgent, crawlerName) => {
    console.log(isCrawler, userAgent, crawlerName); // true, 'Mozilla/5.0 (compatible; Sosospider/2.0; +http://help.soso.com/webspider.htm)', 'Sosospider'
});

// use in express

app.use(CrawlerDetect.express());

app.get("/test/route", function(req, res){
    if (!req.isCrawler()) {
        res.end(403);
    }
    ...
})

```