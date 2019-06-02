<template>
  <div class="dropdown" ref="dropdown">
    <button
        class="dropdown__btn"
        type="button"
        @click="toggleDropdown"
      >
      {{ defaultValue }}
    </button>

    <div :class="`dropdown__option-list ${isOpen ? 'is-open' : ''}`">
      <label
        class="dropdown__option"
        v-for="(option, i) in $props.options"
        :key="i"
        >
        <input
          class="dropdown__radio"
          type="radio"
          :name="$props.name"
          :value="option.value"
          @change="() => changeHandler(option)"
        >

        <span class="dropdown__option-name">
          {{ option.label }}
        </span>
      </label>
    </div>
  </div>
</template>

<script src="./Dropdown.js"></script>

<style src="./Dropdown.styl" lang="scss"></style>
