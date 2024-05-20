<template>
  <div class="filter">
    <div class="search">
      <input
        type="text"
        placeholder="Search by name"
        v-model="name"
        @input="validateInput"
      />
    </div>
    <div class="status-filter">
      <select v-model="selectedStatus">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div class="wrapper-btn">
      <button @click="applyFilter">Apply</button>
      <button @click="resetFilter">Reset</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const name = ref("");
    const selectedStatus = ref("");

    const validateInput = () => {
      // Regular expression to allow only latin letters and numbers
      name.value = name.value.replace(/[^a-zA-Z0-9]/g, '');
    };

    const applyFilter = () => {
      if (!selectedStatus.value || selectedStatus.value === "All") {
        store.dispatch("filterByName", name.value);
      } else {
        store.dispatch("filterByNameAndStatus", {
          name: name.value,
          status: selectedStatus.value
        });
      }
    };

    const resetFilter = () => {
      name.value = "";
      selectedStatus.value = "";
      store.dispatch("getCharacters"); 
    };

    return {
      name,
      selectedStatus,
      applyFilter,
      resetFilter,
      validateInput
    };
  }
};


</script>

<style scoped>
.filter {
  width: 700px;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
}

.search {
  flex-grow: 1;
  margin-right: 1rem;
}

.search input {
  height: 53px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0 0.5rem;
  background: var(--background-card);
  color: cornsilk;
}

.search input::placeholder {
  color: #c850c0;
  text-align: start;
}

.status-filter select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  margin-right: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='none'%20stroke='%23000'%20stroke-width='1.1'%20d='M0%201l2%202%202-2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 8px 10px;
}

.status-filter select:hover {
  color: var(--text-orange);
}

.status-filter select:focus {
  outline: none;
}

.wrapper-btn {
  display: flex;
  gap: 10px; 
}

.wrapper-btn button {
  padding: 8px 16px;
  font-size: 16px;
}

button {
  height: 53px;
  padding: 0 1rem;
  border: none;
  border-radius: 10px;
  background-color: #07532f;
  color: var(--text-orange);
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

  
 </style>