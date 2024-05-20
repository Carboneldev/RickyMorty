<template v-once>
  <div class="container">
    <h1>Rick and Morty</h1>
   <filters />
   <Pgn />
   <ListCharacter />
   <Pgn />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import Filters from './components/Filters.vue';
import ListCharacter from './components/ListCharacter.vue';
import Pgn from './components/Pgn.vue';

export default {
  name: "App",
  components: {
    ListCharacter,
    Pgn,
    Filters
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getCharacters");
    });
  },
};
</script>

<style >
</style>

