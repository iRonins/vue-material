<template>
  <div
    class="md-menu-content"
    @keydown.esc.prevent="close"
    @keydown.tab.prevent="close"
    @keydown.up.prevent="highlightItem('up')"
    @keydown.down.prevent="highlightItem('down')"
    @keydown.enter="fireClick"
    @keydown.space="fireClick"
    @keydown="onKeyDown"
    tabindex="-1">
    <md-list>
      <slot></slot>
    </md-list>
  </div>
</template>

<script>
  export default {
    name: 'md-menu-content',
    data() {
      return {
        oldHighlight: false,
        highlighted: false,
        itemsAmount: 0,
        itemListCount: 0
      };
    },
    methods: {
      close() {
        this.highlighted = false;
        this.$parent.close();
      },
      highlightItem(direction) {
        this.itemsAmount = this.$children[0].$children.length;

        if (this.itemsAmount < this.highlighted - 1) {
          this.highlighted = 1;
        }

        this.oldHighlight = this.highlighted;

        if (direction === 'up') {
          if (this.highlighted === 1) {
            this.highlighted = this.itemsAmount;
          } else {
            this.highlighted--;
          }
        }

        if (direction === 'down') {
          if (this.highlighted === this.itemsAmount) {
            this.highlighted = 1;
          } else {
            this.highlighted++;
          }
        }

        this.highlightChildren();
      },
      fireClick() {
        if (this.highlighted > 0) {
          this.getOptions()[this.highlighted - 1].$children[0].close();
        }
      },
      getOptions() {
        return this.$children[0].$children.filter((child) => {
          return child.$el.classList.contains('md-option');
        });
      },
      onKeyDown({ keyCode, key }) {
        if (keyCode >= 65 && keyCode <= 90) {
          this.itemsAmount = this.$children[0].$children.length;
          const indexes = this.$children[0].$children.filter(({ $el }) => {
            return $el.innerText.charAt(0).toLocaleLowerCase() === key;
          }).map(({ index }) => index);
          const highlightedIndex = indexes.findIndex((item) => item === this.highlighted);
          const indexesLength = indexes.length;
          const index = (highlightedIndex + 1) % indexesLength;

          this.highlighted = indexesLength ? indexes[index] : false;
          this.highlightChildren();
        }
      },
      highlightChildren() {
        for (var i = 0; i < this.itemsAmount; i++) {
          this.$children[0].$children[i].$children[0].highlighted = false;
        }
        if (this.highlighted !== false) {
          this.$children[0].$children[this.highlighted - 1].$el.scrollIntoView({
            block: 'end', behavior: 'smooth'
          });

          this.$children[0].$children[this.highlighted - 1].$children[0].highlighted = true;
        }
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-menu')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-content in a md-menu');
      }
    }
  };
</script>
