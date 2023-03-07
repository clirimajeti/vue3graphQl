<template>
    <v-main>
      <v-container fluid class="overflow-y-visible">
        <v-card v-for="(closedLottery, index) in lotteryTeasers" :key="index" class="pa-5">
            <div class="w-100 pl-5 pr-5">
                <v-card-title class="text-h5">
                   {{  closedLottery.lotteryId }}
                </v-card-title>

                <v-card-subtitle>
                    Drawn Time:  {{ dateFormat(closedLottery.drawDate) }}
                 </v-card-subtitle>
                <div class="my-5">
                    <v-divider class="border-opacity-25" color="info"></v-divider>
                </div>
                <h5>Winning Numbers</h5>
                <v-card-actions>
                <div
                    class="d-flex"
                    v-for="(drawnedNumber, index) in closedLottery.drawnNumbers"
                    :key="`${drawnedNumber['__typename']}${index}`" >

                    <div
                        class="pa-2"
                        v-for="(lottoNumbers, index) in drawnedNumber.numbers"
                        :key="`${lottoNumbers['__typename']}${index}`" >
                        <v-chip
                            class="ma-2"
                            size="large"
                            :variant="`${lottoNumbers.name === 'EXTRA' ? 'flat' : 'outlined'}`"
                            :color="`
                            ${lottoNumbers.name === 'EXTRA' && lotteryId === 'PowerBall' ?
                                'black' : ''}`"
                            v-for="(nummer, index) in lottoNumbers.values"
                            :key="`${nummer}${index}`">
                            {{ winningNumber(nummer, lottoNumbers.name) }}
                        </v-chip>
                        <v-divider class="border-opacity-25"></v-divider>
                    </div>
                </div>
                </v-card-actions>
            </div>
        </v-card>
      </v-container>
    </v-main>
  </template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
} from 'vue';

// service
import LotteryService from '@/services/LotteryService';

export default defineComponent({
  name: 'ListOfTeasers',
  props: {
    lotteryId: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const state = reactive({
      lotteryTeasers: LotteryService.getDrawsHistory(props.lotteryId, 1, 0, 'US-NJ'),
    });

    function dateFormat(date: string) {
      const drawingDate = new Date(date);
      return drawingDate.toLocaleString();
    }
    function winningNumber(nummer: number, name: string) {
      return name === 'POWERPLAY' ? `x${nummer}` : nummer;
    }

    return { ...toRefs(state), dateFormat, winningNumber };
  },
});
</script>
