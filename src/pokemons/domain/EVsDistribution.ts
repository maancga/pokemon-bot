import { EVStat } from './EVStat'

export class EVsDistribution {
  private attack: EVStat
  private specialAttack: EVStat
  private defense: EVStat
  private specialDefense: EVStat
  private hp: EVStat
  private speed: EVStat

  private constructor(
    attack: EVStat,
    specialAttack: EVStat,
    defense: EVStat,
    specialDefense: EVStat,
    hp: EVStat,
    speed: EVStat
  ) {
    this.attack = attack
    this.specialAttack = specialAttack
    this.defense = defense
    this.specialDefense = specialDefense
    this.hp = hp
    this.speed = speed
  }

  static fromEVs(
    attack: EVStat,
    specialAttack: EVStat,
    defense: EVStat,
    specialDefense: EVStat,
    hp: EVStat,
    speed: EVStat
  ) {
    const summ =
      attack.getValue() +
      specialAttack.getValue() +
      defense.getValue() +
      specialDefense.getValue() +
      hp.getValue() +
      speed.getValue()

    if (summ < 0 || summ > 512) throw 'Invalid amount of evs'

    return new EVsDistribution(
      attack,
      specialAttack,
      defense,
      specialDefense,
      hp,
      speed
    )
  }
}
