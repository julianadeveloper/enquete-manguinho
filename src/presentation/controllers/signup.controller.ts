import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/https-helpers'
import { HttpRequest, HttpResponse } from '../protocols/http'
// return any in http response cause error in try catch to return is undefined - type correct: HttpResponse in line 5
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 200,
      body: 'success'
    }
  }
}
