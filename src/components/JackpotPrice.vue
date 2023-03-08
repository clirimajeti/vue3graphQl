<template>
    <div class="JackpotPrice">
        {{ winningPrice }}
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { JackpotSize } from '@/types/JackpotSize';

export default defineComponent({
  props: {
    jackpotSize: {
      type: Object as PropType<JackpotSize>,
      default: null,
    },
  },
  setup(props) {
    const winningPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: props?.jackpotSize?.currency,
    }).format(props?.jackpotSize?.value);

    return { winningPrice };
  },
});
</script>
