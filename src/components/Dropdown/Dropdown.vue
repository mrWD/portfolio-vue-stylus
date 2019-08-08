<template lang="pug">
  .dropdown(ref='dropdown')
    button.dropdown__btn(type='button', @click='toggleDropdown')
      | {{ defaultValue }}

    .dropdown__option-list(:class="{ 'is-open': isOpen}")
      label.dropdown__option(v-for='(option, i) in $props.options', :key='i')
        input.dropdown__radio(type='radio', :name='$props.name', :value='option.value', @change='() => changeHandler(option)')

        span.dropdown__option-name
          | {{ option.label }}

</template>

<script src="./Dropdown.ts" lang="ts"></script>

<style src="./Dropdown.styl" lang="stylus"></style>
