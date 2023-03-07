// eslint-disable-next-line no-shadow
import { LotteryId } from '@/types/LotteryId'
interface Numbers {
    name: string[],
    values: number[]
}
interface DrawnNumbers {
  numbers: Numbers[]
}

export interface Draws {
    addOns: string[],
    drawDate: Date,
    drawnNumbers: DrawnNumbers[],
    id: string,
    lotteryId: LotteryId
}
