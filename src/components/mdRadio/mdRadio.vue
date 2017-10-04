<template>
  <div class="md-radio" :class="[themeClass, classes]">
    <div class="md-radio-container" @click.stop="toggleCheck">
      <input type="radio" :name="name" :id="id" :disabled="disabled" v-model="value" :value="mdValue" @focus="onFocus" @focusout="onBlur" :tabindex="tabindex">
      <md-ink-ripple :md-disabled="disabled" />
    </div>

    <label :for="id || name" class="md-radio-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdRadio.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-radio',
    props: {
      name: String,
      id: String,
      value: [String, Boolean, Number],
      mdValue: {
        type: [String, Boolean, Number],
        required: true
      },
      disabled: Boolean,
      tabindex: {
        default: 0
      }
    },
    data() {
      return {
        focused: false
      };
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-checked': this.isChecked,
          'md-disabled': this.disabled,
          'md-keyboard-focus': this.focused
        };
      },
      isChecked() {
        return typeof this.value !== 'undefined' && this.value !== null && this.mdValue.toString() === this.value.toString();
      }
    },
    methods: {
      toggleCheck($event) {
        if (!this.disabled) {
          this.$emit('change', this.mdValue, $event);
          this.$emit('input', this.mdValue, $event);
        }
      },
      onFocus() {
        this.focused = true;
      },
      onBlur() {
        this.focused = false;
      }
    }
  };
</script>
