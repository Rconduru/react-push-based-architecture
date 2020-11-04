/**
 * Not Found - STATUS CODE 404
 *
 * @export
 * @class NotFoundException
 * @extends {Error}
 */
export default class NotFoundException extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}
