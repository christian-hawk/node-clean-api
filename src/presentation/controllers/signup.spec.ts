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
  })
})
