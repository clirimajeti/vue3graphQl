<template>
  <v-main>
    <v-container fluid class="overflow-y-visible">
      <v-row dense>
        <v-col
        v-for="(lotto, index) in teasersList" :key="lotto.id"
          cols="12"
        >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  <JackpotPrice :jackpotSize="lotto.jackpotSize" :key="`${lotto.id}-${index}`"/>
                </v-card-title>

                <v-card-subtitle> {{ lotto.id }}</v-card-subtitle>

                <v-card-actions>
                  <div class="ms-2">
                    <CountDown :closingDate="lotto.closingDate" :key="`${lotto.id}-${index}`"/>
                </div>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { LotteryTeasers } from '@/types/LotteryTeasers';
import {
  defineComponent,
  PropType,
  computed,
} from 'vue';
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
    const teasersList = computed(() => (props.search ? props.lotteryTeasers
      .filter(
        (teaser: LotteryTeasers) => teaser.id.includes(props.search),
      ) : props.lotteryTeasers));

    return { teasersList };
  },
});
</script>
