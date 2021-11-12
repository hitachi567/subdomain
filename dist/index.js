"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * middleware for handle request from subdomain
 * @param handler request handler for subdomain
 * @param subdomain array of piece path of subdomain
 * @returns `express.RequestHandler`
 * @example
 *
 * // for sub2.sub1.domain.com
 * app.use(
 *     subdomain(middleware, ['sub1', 'sub2'])
 * );
 *
 */
function subdomain(handler, subdomain) {
    return function (request, response, next) {
        var requestedPath = request.subdomains;
        var expectedPath = subdomain || [];
        if (requestedPath.length !== expectedPath.length) {
            return next();
        }
        for (var i = 0; i < requestedPath.length; i++) {
            if (requestedPath[i] !== expectedPath[i]) {
                return next();
            }
        }
        handler(request, response, next);
    };
}
exports.default = subdomain;
//# sourceMappingURL=index.js.map