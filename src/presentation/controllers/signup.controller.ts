import { HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/https-helpers'
// return any in http response cause error in try catch to return is undefined - type correct: HttpResponse in line 5
export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
