import { AttackId } from '../../shared/ids/AttackId';

export class MoveSet {
  private firstAttack: AttackId;

  private secondAttack: AttackId;

  private thidAttack: AttackId;

  private fourthAttack: AttackId;

  private constructor(
    firstAttack: AttackId,
    secondAttack: AttackId,
    thidAttack: AttackId,
    fourthAttack: AttackId,
  ) {
    this.firstAttack = firstAttack;
    this.secondAttack = secondAttack;
    this.thidAttack = thidAttack;
    this.fourthAttack = fourthAttack;
  }
}
