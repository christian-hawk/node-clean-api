import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpControler {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (httpRequest.body[field] == null) {
        return badRequest(new MissingParamError(field))
      }
    }
    return badRequest(new MissingParamError(''))
  }
}
