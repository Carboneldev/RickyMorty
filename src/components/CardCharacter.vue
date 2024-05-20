  <template>
  <Transition name="fadeIn" mode="out-in" class="character">
    <div>
      <img width="100%" loading="auto" :src="character.image" :alt="character.name" />
      <div class="character__info">
        <h2>{{ character.name }}</h2>
        <div class="status">
          <span :class="character.status == 'Alive'
            ? 'alive'
            : character.status == 'Dead'
              ? 'dead'
              : 'default'
            "></span>
          <span>{{ character.status }} - {{ character.species }}</span>
        </div>
        <div class="origin">
          <span>origin: {{ character.origin.name }}</span>
        </div>
        <div class="location">location: {{ character.location.name }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue'
import { useStore } from "vuex";

export default {
  name: 'CardCharacter',
  props: ["character"],

  setup(props) {
    const store = useStore();

    return {
      
    }
  },
};
</script>

<style scoped>
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s ease;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}

.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  transition: transform 200ms ease-in-out;
  height: 100%;
  scroll-behavior: auto;
}

.character:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px 1px var(--background-shadow);
}

.character h2 {
  margin-bottom: 0.5rem;
  color: var(--text-orange);
}

.character span {
  color: var(--text-gray);
}

.character__info {
  padding: 1.5rem;
}

.character__info .status {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.character__info .status span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.character__info .alive {
  background-color: green;
}

.character__info .dead {
  background-color: red;
}

.character__info .default {
  background-color: white;
}

.character .origin {
  margin-bottom: 0.5rem;
}
</style>
