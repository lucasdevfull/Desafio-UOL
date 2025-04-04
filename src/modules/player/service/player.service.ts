import { HttpService } from '@nestjs/axios'
import { ConflictException, Injectable } from '@nestjs/common'
import { randomInt } from 'node:crypto'
import { firstValueFrom } from 'rxjs'
import { CreatePlayerDto } from '../../../domain/dto/player.dto'
import { Player } from '../../../domain/entity/player.entity'
import type { Avengers } from '@/types/avengers.types'
import type { JusticeLeague } from '@/types/justice.types'
import { parseStringPromise } from 'xml2js'
import { PlayerRepository } from '../repository/player.repository'

@Injectable()
export class PlayerService {
  private avengersUrl =
    'https://raw.githubusercontent.com/uolhost/test-backEnd-Java/master/referencias/vingadores.json'
  private justiceLeagueUrl =
    'https://raw.githubusercontent.com/uolhost/test-backEnd-Java/master/referencias/liga_da_justica.xml'
  constructor(
    private http: HttpService,
    private playerRepository: PlayerRepository
  ) {}

  async findAllPlayers() {
    return await this.playerRepository.findAll()
  }
  async createPlayer(data: CreatePlayerDto, codiNames: string[]) {
    console.log(data)
    const playerExists = await this.playerRepository.findByEmail(data.email)

    if (playerExists) {
      throw new ConflictException('player already exists')
    }

    const players = await this.playerRepository.findAllCodiNames()

    codiNames = codiNames.filter(
      codiName => !players.find(player => player.codiName === codiName)
    )

    if (codiNames.length === 0) {
      throw new ConflictException('All codiNames are in use')
    }

    let player = new Player(data, codiNames[randomInt(0, codiNames.length - 1)])
    player = await this.playerRepository.create(player)
    return player
  }

  async findAvengersList(): Promise<Avengers> {
    const { data } = await firstValueFrom(
      this.http.get<Avengers>(this.avengersUrl)
    )
    return data
  }

  async findJusticeLeaguelist(): Promise<JusticeLeague> {
    const { data } = await firstValueFrom(
      this.http.get<JusticeLeague>(this.justiceLeagueUrl)
    )
    return parseStringPromise(data)
  }
}
