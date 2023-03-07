<template>
  <v-main>
    <v-container fluid class="overflow-y-visible">
      <v-row dense>
        <v-col
        v-for="(lotto, index) in teasersList" :key="lotto.id"
          cols="12"
          @click="selectedLotto(lotto.id)"
        >
          <v-card class="cursor-pointer">
            <v-card-title class="text-h5">
              <JackpotPrice :jackpotSize="lotto.jackpotSize" :key="`${lotto.id}-${index}`"/>
            </v-card-title>

            <v-card-subtitle> {{ lotto.id }}</v-card-subtitle>

            <v-card-actions class="d-flex justify-space-between">
              <div class="ms-2">
                <CountDown :closingDate="lotto.closingDate" :key="`${lotto.id}-${index}`"/>
              </div>
              <small>
                Click to find the past winning numbers
              </small>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
} from 'vue';

import { useRouter } from 'vue-router';

// types
import { LotteryTeasers } from '@/types/LotteryTeasers';

// components
import CountDown from '@/components/CountDown.vue';
import JackpotPrice from '@/components/JackpotPrice.vue';

export default defineComponent({
  name: 'ListOfTeasers',
  components: {
    CountDown,
    JackpotPrice,
  },
  props: {
    lotteryTeasers: {
      type: Array as PropType<LotteryTeasers[]>,
      default: () => [],
    },
    search: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const router = useRouter();

    const teasersList = computed(() => (props.search ? props.lotteryTeasers
      .filter(
        (teaser: LotteryTeasers) => teaser.id.includes(props.search),
      ) : props.lotteryTeasers));

    function selectedLotto(lottoId: string) {
      router.push(`/lotto/${lottoId}`);
    }

    return { teasersList, selectedLotto };
  },
});
</script>
<style lang="scss" scoped>
  .cursor-pointer{
    cursor: pointer;
  }
</style>
