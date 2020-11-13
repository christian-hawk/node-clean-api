import { MissingParamError } from '../errors/missing-param-error'
import { SignUpControler } from './signup'
describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpControler()
    const httpRequest = {
      body: {
        email: 'anyemail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  test('should return 400 if no email is provided', () => {
    const sut = new SignUpControler()
    const httpRequest = {
      body: {
        name: 'anyname',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
  test('should return 400 if no password is provided', () => {
    const sut = new SignUpControler()
    const httpRequest = {
      body: {
        name: 'anyname',
        email: 'anyemail@mail.com',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
