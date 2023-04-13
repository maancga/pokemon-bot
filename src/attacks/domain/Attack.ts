import { AttackId } from '../../shared/ids/AttackId'
import { AttackName } from './AttackName'

export class Attack {
  private id: AttackId
  private name: AttackName
  private currentPPs: number
  private totalPPs: number
}
