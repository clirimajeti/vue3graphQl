<template>
    <v-card max-width="100%" height="100%"
            class="mx-auto overflow-y-visible"
            color="grey-lighten-3">
      <v-layout>
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Super Lotto</v-app-bar-title>

          <v-spacer></v-spacer>

        </v-app-bar>
        <LotteryPost :lotteryId="lotteryId" />
      </v-layout>
    </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
} from 'vue';

import { useRoute } from 'vue-router';

import LotteryPost from '@/components/LotteryPost.vue';

export default defineComponent({
  name: 'LotteryView',
  components: {
    LotteryPost,
  },
  setup() {
    const route = useRoute();

    const state = reactive({
      lotteryId: route.params.lotteryId,
    });

    return {
      ...toRefs(state),

    };
  },
});
</script>
