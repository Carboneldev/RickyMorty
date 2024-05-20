<template>
    <div class="buttons">
      <button class="btn" @click="prevPage">⬅ Back</button>
      <button class="btn" @click="nextPage">Next ➡</button>
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  
  export default {
    setup() {
      const store = useStore();
  
      const pageNext = computed(() => store.state.next);
      const pagePrev = computed(() => store.state.prev);
  
      const prevPage = () => {
        if (pagePrev.value) {
          store.dispatch("getCharacters", pagePrev.value);
        }
      };
  
      const nextPage = () => {
        if (pageNext.value) {
          store.dispatch("getCharacters", pageNext.value);
        }
      };
  
      return {
        prevPage,
        nextPage
      };
    },
  };
  </script>
  

<style scoped>
.buttons {
  width: 330px;
  margin: 2rem auto 0;
}

.buttons .btn {
  height: 50px;
  width: 120px;
  margin: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 0.5rem;
  background: var(--text-gray);
  color: var(--text-white);
}

.buttons .btn:hover {
  color: var(--background-body);
}

.buttons .btn:active {
  transform: scale(1.1, 1.2);
  font-size: 20px;
  box-shadow: 5px 4px 4px rgb(103, 22, 69);
}

</style>