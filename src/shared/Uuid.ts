import { v4 } from 'uuid';
import { SingleValueObject } from './SingleValueObject';

export class Uuid extends SingleValueObject<string> {
  static fromPrimitives(idString: string) {
    return new Uuid(idString);
  }

  static generateNew() {
    return new Uuid(v4());
  }
}
