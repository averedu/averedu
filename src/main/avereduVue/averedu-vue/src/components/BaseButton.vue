<template>
  <button :class="['modern-button', buttonType]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String,
      default: 'primary', // 기본값은 primary
    },
  },
  methods: {
    handleClick() {      
    },
  },
});
</script>

<style scoped>
button {
  display: inline-block;
  margin: 5px;
  padding: 5px 20px;  /* 세로 크기 */
  font-size: 16px;
  cursor: pointer;
}

.modern-button {
  padding: 5px 20px;  /* 세로 크기 */
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.modern-button.primary {
  background-color: #0047ab; /* 코발트 블루 */
  color: white;
}

.modern-button.danger {
  background-color: #d9534f; /* 빨간색 */
  color: white;
}

.modern-button.warning {
  background-color: #f0ad4e; /* 노란색 */
  color: white;
}

.modern-button:hover {
  opacity: 0.8;
}
</style>
