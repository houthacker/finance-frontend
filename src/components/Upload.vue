<template>
  <div class="upload-btn">
    <form ref="upload" id="upload" method="post" @submit.prevent="upload" enctype="multipart/form-data">
      <input type="hidden" name="record_type" :value="recordType" />
      <b-form-file v-model="records" name="records"></b-form-file>
      <br /> Selected file: {{ records && records.name }}
      <div class="row">
        <div class="col-md-4 pb-2">
          <b-button size="sm" variant="secondary" type="submit" >Upload</b-button>
        </div>
      </div>
      <div class="row">
        <b-alert v-if="result !== null" dismissible :variant="uploadResult" show> {{ result }} </b-alert>
      </div>
    </form>
  </div>
</template>

<script>
  import BackendClient from '../backend-client'

  export default {
    data () {
      return {
        recordType: 'asn',
        records: null,
        client: this.client(),
        uploadResult: 'success',
        result: null
      }
    },
    methods: {
      client: function () {
        return new BackendClient(this.$configuration.API, this.$http)
      },
      upload: function (e) {
        let self = this
        let form = document.getElementById('upload')
        let fd = new FormData(form)

        this.client.uploadRecords({ data: fd }, function (error, response) {
          if (error) {
            self.uploadResult = 'danger'
            self.result = error.statusText
          } else {
            self.result = 'Upload succeeded'
          }
        })
      }
    }
  }
</script>
