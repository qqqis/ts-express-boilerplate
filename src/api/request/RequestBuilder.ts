export class ControllerRequest {
    private readonly name: string
  
    constructor(requestBuilder: RequestBuilder) {
      this.name = requestBuilder.name
    }
  
    getName(): string {
      return this.name
    }
}
  
  export default class RequestBuilder {
    private _name!: string
  
    build() {
      return new ControllerRequest(this)
    }
  
    setName(value: string) {
      this._name = value
      return this
    }
  
    get name(): string {
      return this._name
    }
}
  