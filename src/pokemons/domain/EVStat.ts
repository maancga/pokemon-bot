import { SingleValueObject } from '../../shared/SingleValueObject';

export class EVStat extends SingleValueObject<number> {
  static fromAmount(amount: number) {
    if (amount < 0 || amount > 252) throw 'Invalid amount of evs';
    return new EVStat(amount);
  }
}
