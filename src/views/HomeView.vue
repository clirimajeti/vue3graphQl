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

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-autocomplete
            max-width="100px"
            class="mt-5 mr-5"
            label="Search"
            @update:modelValue="search = $event;"
            clearable
            :items="lotteryIds"
          ></v-autocomplete>

        </v-app-bar>
        <ListOfTeasers :lotteryTeasers="lotteryTeasers" :search="search" />
      </v-layout>
    </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
} from 'vue';

import LotteryService from '@/services/LotteryService';
import LotteryId from '@/types/LotteryId';
import ListOfTeasers from '@/components/ListOfTeasers.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListOfTeasers,
  },
  setup() {
    const state = reactive({
      lotteryTeasers: LotteryService.getLotteryTeasers('US-NJ'),
      lotteryIds: Object.keys(LotteryId).filter((v) => Number.isNaN(Number(v))),
      search: '',
    });

    return {
      ...toRefs(state),

    };
  },
});
</script>
