export type CardType = {
  id?: number
  number: string
  validator: string
  way: string
  emitter: string
  product: string
  luckyTickets: LuckyTicketType[]
  extraLine: string
}

export type LuckyTicketType = {
  number: string
  startDate: Date
  endDate: Date
  prize: number
  status: boolean
}

export interface CardStateInterface {
  card: CardType | null
  isLoading: boolean
  initiated: boolean
}
