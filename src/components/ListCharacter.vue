<template>
    <section>
      <div class="characters">
        <div class="characters__item" v-for="character in characters" :key="character.id">
          <CardCharacter :character="character" />
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
import CardCharacter from "@/components/CardCharacter.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    CardCharacter,
  },
  setup() {
    const store = useStore();

    const characters = computed(() => store.state.charactersFilter);

    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return {
      characters,
    };
  },
};
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2rem 0;
}

.characters > * {
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .characters {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .characters {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .characters {
    grid-template-columns: 1fr;
  }
}
</style>

