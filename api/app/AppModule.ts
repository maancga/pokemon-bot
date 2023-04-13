import { Controller, Get, Module } from '@nestjs/common'
import { FightModule } from '../fight/FightModule'

@Controller({ path: '/' })
export class AppController {
  @Get('/')
  sayHello() {
    return 'Hello World!'
  }
}

@Module({
  controllers: [AppController],
  imports: [FightModule]
})
export class AppModule {}
