import { Test, TestingModule } from '@nestjs/testing'
import { Server } from 'http'
import tepper from 'tepper'
import { FightModule } from './fight/FightModule'

export class TestClient {
  private constructor(private readonly app: Server) {}

  static async createNew() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FightModule]
    }).compile()

    const app = moduleFixture.createNestApplication()
    await app.init()
    return new TestClient(app.getHttpServer())
  }

  async startFight() {
    return tepper(this.app).get('/fight/start').run()
  }
}
