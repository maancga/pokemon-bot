import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { FightModule } from './fight/FightModule'

export class TestClient {
  private constructor(private readonly app: INestApplication) {}

  static async createNew() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [FightModule],
      controllers: []
    }).compile()

    const app = moduleFixture.createNestApplication()
    await app.init()
    return new TestClient(app)
  }

  async startFight() {}
}
