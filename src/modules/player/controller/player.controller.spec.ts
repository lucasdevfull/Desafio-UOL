import { Test, TestingModule } from '@nestjs/testing'
import { PlayerController } from './player.controller'
import { PlayerService } from '../service/player.service'
import { PlayerRepository } from '../repository/player.repository'
import { PrismaModule } from '../../../infra/prisma/prisma.module'
import { HttpModule } from '@nestjs/axios'
import { CreatePlayerDto } from '../../../domain/dto/player.dto'
import { CodiName } from '../../../domain/enum/player.enum'
import { Player } from '../../../domain/entity/player.entity'
import { ConflictException } from '@nestjs/common'

describe('PlayerController', () => {
  let controller: PlayerController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, HttpModule],
      controllers: [PlayerController],
      providers: [PlayerService, PlayerRepository],
    }).compile()

    controller = module.get<PlayerController>(PlayerController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('findAllPlayers return all players', async () => {
    expect(await controller.findAllPlayers()).not.toBeNull()
  })
  //it('findAllPlayers return not undefined', async () => {
  //  expect(await controller.findAllPlayers()).not.toBeUndefined();
  //})

  it('CreatePlayer success', async () => {
    const data: CreatePlayerDto = {
      name: 'Giovanna',
      email: 'gigi@gmail.com',
      phoneNumber: '972204521',
      category: CodiName.AVENGERS,
    }
    const result = await controller.createPlayer(data)
    expect(result).toBeDefined()
  })
})
