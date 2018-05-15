const spiders   = require('./src/spiders');
const exclusion = require('./src/exclusion');
const regex     = new RegExp('('+spiders.join('|')+')', 'i');
const ex        = new RegExp('('+exclusion.join('|')+')', 'gi');
function isCrawler (ua, cb) {
    if (ua !== undefined) {
        let agent = ua.replace(ex, '');
        let test = regex.test(agent);
        if (cb && typeof cb === 'function') {
            let match = test ? agent.match(regex) : [];
            cb.call(null, test, ua, match && match.length > 0 ? match[0] : false);
        }
        return test;
    }
    return false;
}


module.exports = {
    isCrawler: isCrawler,

    express: function () {
        return function (req, res, next) {
            req.isCrawler = isCrawler.bind(undefined, req.get('user-agent'))
            next()
        }
    }
}