<template>
    <div>
       {{ countdown }}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CountDown',
  props: {
    closingDate: {
      type: String,
      default: new Date(),
    },
  },
  setup(props) {
    const countDownDate = new Date(props.closingDate).getTime();
    const countdown = ref();
    // Update the count down every 1 second
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const futureDay = new Date(props.closingDate).toLocaleString('en-us', { weekday: 'short' });

      const daysDisplay = days <= 7 ? futureDay : `${days} days`;
      const hoursDisplay = hours < 10 ? `0${hours}` : hours;

      countdown.value = `${daysDisplay}, ${hoursDisplay}:${
        minutes}:${seconds}`;

      if (distance < 0) {
        clearInterval(timer);
        countdown.value = 'Closed';
      }
    }, 1000);
    return { countdown };
  },
});
</script>
