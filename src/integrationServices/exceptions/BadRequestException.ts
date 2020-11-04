/**
 * Bad Request - STATUS CODE 400
 *
 * @export
 * @class BadRequestException
 * @extends {Error}
 */
export default class BadRequestException extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}
