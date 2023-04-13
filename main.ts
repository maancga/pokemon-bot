import { NestFactory } from '@nestjs/core'
import { AppModule } from './api/app/AppModule'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
