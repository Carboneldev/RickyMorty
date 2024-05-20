<template>
    <button class="custom-button">Применить</button>
  </template>
  
  <script>
  export default {
    name: 'MyButton',
  };
  </script>
  
  <style  scoped>
  .custom-button {
  width: 15rem;
  color: var(--text-orange);
  background-color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 500ms ease;
}

.custom-button:hover {
  transform: scale(1.1) translateY(-5px);
}

  </style>
  