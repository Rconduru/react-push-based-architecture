/**
 * Internal Server Error - STATUS CODE 500
 *
 * @export
 * @class InternalServerErrorException
 * @extends {Error}
 */
export default class InternalServerErrorException extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}
