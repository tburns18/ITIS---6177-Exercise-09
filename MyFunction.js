module.exports = async function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

    var keyword = context.bindingData.keyword

    if (req.query.keyword || (req.body && req.body.name)) {
        context.res = {
            // status defaults to 200 */
            body: `Tyler says ${keyword}`
        };
    }
    else {
        context.res = {
            status: 400,
            body: "No query in string, please add a query"
        };
    }
    context.done();
};