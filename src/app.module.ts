import { Module } from '@nestjs/common'
import { PlayerModule } from '@modules/player/player.module'
import { PrismaModule } from '@infra/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    PlayerModule,
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
