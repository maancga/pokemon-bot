import { Controller, Get } from '@nestjs/common'

@Controller({
  path: 'fight'
})
export class FightController {
  @Get('start')
  startFight() {
    return { id: 'some id' }
  }
}
