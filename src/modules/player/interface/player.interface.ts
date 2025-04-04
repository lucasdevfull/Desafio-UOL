import { Player } from '@/domain/entity/player.entity'

export interface PlayerInterface {
  findAll(): Promise<Player[]>
  findByEmail(email: string): Promise<Player | null>
  findAllCodiNames(): Promise<{ codiName: string }[]>
  create(data: Player): Promise<Player>
}
