const CrawlerDetect = require('./index');

// Pass a user agent as a string
if (CrawlerDetect.isCrawler('Mozilla/5.0 (compatible; Sosospider/2.0; +http://help.soso.com/webspider.htm)')) {
    // true if crawler user agent detected
}

// Output the name of the bot that matched (if any)
CrawlerDetect.isCrawler('Mozilla/5.0 (Linux; Android 4.2.1; CUBOT ONE Build/JOP40D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Mobile Safari/537.36', (isCrawler, userAgent, crawlerName) => {
    console.log(isCrawler, userAgent, crawlerName);
});
