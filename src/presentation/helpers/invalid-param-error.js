module.exports = class InvalidParamError extends Error {
  constructor (paramName) {
    super(`InvalidParamError param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
