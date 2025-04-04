import { Test, TestingModule } from '@nestjs/testing'
import { PlayerService } from './player.service'
import { HttpModule, HttpService } from '@nestjs/axios'
import { PlayerRepository } from '../repository/player.repository'
import { PrismaModule } from '../../../infra/prisma/prisma.module'

describe('PlayerService', () => {
  let service: PlayerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, PrismaModule],
      providers: [PlayerService, PlayerRepository],
    }).compile()

    service = module.get<PlayerService>(PlayerService)
  })

  it('pegar todos os players', () => {
    expect(service.findAllPlayers).not.toBeNull()
  })
})
