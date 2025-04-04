import { Module } from '@nestjs/common'
import { PlayerController } from '@controller/player.controller'
import { PlayerService } from '@services/player.service'
import { HttpModule } from '@nestjs/axios'
import { PrismaModule } from '@infra/prisma/prisma.module'
import { PlayerRepository } from '@repository/player.repository'

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [PlayerController],
  providers: [PlayerService, PlayerRepository],
  exports: [PlayerService],
})
export class PlayerModule {}
