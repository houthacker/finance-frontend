<template>
  <div class="label-area">
    <input id="label-input" type="text" class="form-control col-lg-auto" :placeholder="$t('add') + '...'" @keyup="onKeyup($event)">
    <i class="selected-labels"></i><p></p>
    <div class="labels-list">
      <button v-for="label in labels" class="btn btn-secondary btn-sm f-label">
        {{ label }}
        <span class="f-inline-close" aria-hidden="true" @click="removeLabel(label)">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'f-label-area',
    props: ['labels'],
    data () {
      return {
        pending: ''
      }
    },
    methods: {
      onKeyup: function (event) {
        let c = String.fromCharCode(event.keyCode)
        if (/[A-Za-z0-9]/.test(c)) {
          this.pending += event.key
        } else if (/\s/.test(c) || event.keyCode === 13) {
          this.labels.push(this.pending)
          this.pending = ''
          document.getElementById('label-input').value = ''
        }
      },
      removeLabel: function (label) {
        this.labels.splice(this.labels.indexOf(label), 1)
      }
    }
  }
</script>

<style scoped>
  .f-inline-close {
    color: #c7c7c7;
    font-size: 120%;
    font-weight: bold;
  }
  .f-label {
    margin-right: 3px;
  }
</style>
