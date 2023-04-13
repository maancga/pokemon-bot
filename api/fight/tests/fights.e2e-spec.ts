import { TestClient } from '../../TestClient'

describe('Fights', () => {
  it('Starts a pokemon fight', async () => {
    const app = await TestClient.createNew()
    const response = await app.startFight()
    expect(response.body.id).toEqual('some id')
  })
})
