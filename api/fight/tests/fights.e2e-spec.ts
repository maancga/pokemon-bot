import { TestClient } from '../../TestClient'

describe('Fights', () => {
  it('Starts a pokemon fight', async () => {
    const app = await TestClient.createNew()
    app.startFight()
  })
})
