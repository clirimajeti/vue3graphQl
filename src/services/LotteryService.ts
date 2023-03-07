/* eslint-disable import/prefer-default-export */
import { useQuery, provideApolloClient } from '@vue/apollo-composable';
import {
  computed,
} from 'vue';
import { getLottoDraws, getLottoTeasers } from '@/queries/queries';
import apolloClient from '@/client-apollo/apolloClient';

provideApolloClient(apolloClient);

class LotteryService {
  // eslint-disable-next-line class-methods-use-this
  getDrawsHistory(lotteryId: string, limit: number, offset: number, licensedTerritory: string) {
    const { result } = useQuery(getLottoDraws, {
      filter: {
        lotteries: lotteryId,
      },
      licensedTerritory,
      limit,
      offset,
    });
    return computed(() => result?.value?.drawHistory?.draws ?? []);
  }

  // eslint-disable-next-line class-methods-use-this
  getLotteryTeasers(licensedTerritory: string) {
    const { result } = useQuery(getLottoTeasers, {
      licensedTerritory,
    });
    return computed(() => result?.value?.lotteryTeasers ?? []);
  }
}

export default new LotteryService();
