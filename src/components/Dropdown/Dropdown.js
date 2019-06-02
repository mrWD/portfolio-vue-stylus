export default {
  name: 'dropdown',

  props: ['name', 'defaultVal', 'placeholder', 'options', 'change'],

  data: () => ({
    isOpen: false,
    currentValue: '',
  }),

  beforeMount() {
    document.addEventListener('click', this.closeDropdown)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown)
  },

  computed: {
    defaultValue() {
      const { defaultVal, placeholder } = this.$props
      const defaultLabel = defaultVal && defaultVal.value

      return this.currentValue || defaultLabel || placeholder
    },
  },

  methods: {
    changeHandler(option) {
      this.currentValue = option.label
      this.$emit('change', option)
      this.toggleDropdown()
    },

    toggleDropdown() {
      this.isOpen = !this.isOpen
    },

    closeDropdown({ target }) {
      const { dropdown } = this.$refs

      if (target === dropdown || dropdown.contains(target)) return

      this.isOpen = false
    },
  }
}
