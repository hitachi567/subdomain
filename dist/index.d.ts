import { RequestHandler } from 'express';
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
export default function subdomain(handler: RequestHandler, subdomain?: string[]): RequestHandler;
