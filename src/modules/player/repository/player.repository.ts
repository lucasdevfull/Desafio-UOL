import { Player } from '../../../domain/entity/player.entity'
import { PrismaService } from '../../../infra/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { PlayerInterface } from '../interface/player.interface'

@Injectable()
export class PlayerRepository implements PlayerInterface {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Player[]> {
    return await this.prisma.player.findMany()
  }

  async findByEmail(email: string): Promise<Player | null> {
    return await this.prisma.player.findUnique({ where: { email } })
  }

  async findAllCodiNames(): Promise<{ codiName: string }[]> {
    return await this.prisma.player.findMany({
      select: {
        codiName: true,
      },
    })
  }

  async create(data: Player): Promise<Player> {
    return await this.prisma.player.create({ data })
  }
}
