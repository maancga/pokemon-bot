import { Module } from '@nestjs/common'
import { FightController } from './FightController'

@Module({
  controllers: [FightController]
})
export class FightModule {}
