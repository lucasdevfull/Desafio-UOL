import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { ValidationPipe } from '@nestjs/common'
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  const config = app.get(ConfigService)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(config.get<number>('PORT')!)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
