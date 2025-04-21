import { Codiname } from '@prisma/client'
import { CreatePlayerDto } from '@domain/dto/player.dto'

export class Player {
  playerId?: number
  name: string
  email: string
  phoneNumber: number
  codiName: string
  category: Codiname

  constructor({ phoneNumber, ...data }: CreatePlayerDto, codiName: string) {
    Object.assign(this, {
      ...data,
      phoneNumber: Number(phoneNumber),
      codiName,
    })
  }

  static create(data: CreatePlayerDto, codiName: string) {
    return new Player(data, codiName)
  }
}
