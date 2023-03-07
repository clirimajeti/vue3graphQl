// eslint-disable-next-line no-shadow
import LotteryId from '@/types/LotteryId';

interface Numbers {
    id: string,
    name: string[],
    values: number[]
}
interface DrawnNumbers {
  id: string,
  numbers: Numbers[]
}

export interface Draws {
    addOns: string[],
    drawDate: Date,
    drawnNumbers: DrawnNumbers[],
    id: string,
    lotteryId: LotteryId
}
