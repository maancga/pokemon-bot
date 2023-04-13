import { SingleValueObject } from './SingleValueObject'

export class Name extends SingleValueObject<string> {
  static fromPrimitives(name: string) {
    return new Name(name)
  }

  static fromString(name: string) {
    return new Name(name)
  }
}
