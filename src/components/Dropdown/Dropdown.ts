import Vue from 'vue'

export default Vue.extend({
  name: 'dropdown',

  props: ['name', 'defaultVal', 'placeholder', 'options', 'change'],

  data() {
    return {
      isOpen: false,
      currentValue: '',
    }
  },

  beforeMount() {
    document.addEventListener('click', this.closeDropdown)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown)
  },

  computed: {
    defaultValue(): string {
      const { defaultVal, placeholder } = this.$props
      const defaultLabel = defaultVal && defaultVal.value

      return this.currentValue || defaultLabel || placeholder
    },
  },

  methods: {
    changeHandler(option: { label: string }): void {
      this.currentValue = option.label
      this.$emit('change', option)
      this.toggleDropdown()
    },

    toggleDropdown(): void {
      this.isOpen = !this.isOpen
    },

    closeDropdown(this: HTMLFormElement, { target }: any): void {
      const { dropdown } = this.$refs

      if (target === dropdown || dropdown.contains(target)) return

      this.isOpen = false
    },
  }
})
