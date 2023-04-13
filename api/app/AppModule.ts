import { Module } from '@nestjs/common'
import { FightModule } from '../fight/FightModule'

@Module({
  controllers: [],
  imports: [FightModule]
})
export class AppModule {}
