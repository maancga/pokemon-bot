import { AbilityId } from '../../shared/ids/AbilityId';
import { ItemId } from '../../shared/ids/ItemId';
import { PokemonId } from '../../shared/ids/PokemonId';
import { PokemonSpecieId } from '../../shared/ids/SpecieId';
import { EVsDistribution } from './EVsDistribution';
import { MoveSet } from './MoveSet';
import { PokemonName } from './PokemonName';

export class Pokemon {
  private id: PokemonId;

  private name: PokemonName;

  private specieId: PokemonSpecieId;

  private itemId: ItemId;

  private abilityId: AbilityId;

  private shiny: boolean;

  private evsDistribution: EVsDistribution;

  private moveSet: MoveSet;
}
