/**
 * Unauthorized - STATUS CODE 401
 *
 * @export
 * @class UnauthorizedException
 * @extends {Error}
 */
export default class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}
