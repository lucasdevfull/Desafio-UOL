import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { PlayerService } from '../service/player.service'
import { CreatePlayerDto } from '../../../domain/dto/player.dto'
import { CodiName } from '../../../domain/enum/player.enum'

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAllPlayers() {
    return this.playerService.findAllPlayers()
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createPlayer(@Body() data: CreatePlayerDto) {
    const codiNames: string[] = []
    switch (data.category) {
      case CodiName.AVENGERS:
        const { vingadores } = await this.playerService.findAvengersList()
        vingadores.forEach(({ codinome }) => codiNames.push(codinome))
        break

      case CodiName.JUSTICELEAGUE:
        const {
          liga_da_justica: { codinomes },
        } = await this.playerService.findJusticeLeaguelist()
        codinomes[0].codinome.forEach(codinome => codiNames.push(codinome))
        break
    }

    return this.playerService.createPlayer(data, codiNames)
  }
}
