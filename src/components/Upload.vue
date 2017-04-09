<template>
  <div class="container align-items-start upload-form">
    <form ref="upload" id="upload" method="post" @submit.prevent="upload" enctype="multipart/form-data">
      <div class="form-group">
        <input name="record_type" :value="recordType" hidden/>
        <label class="col custom-file">
          <input id="records" name="records" @change="selected()" type="file" class="col custom-file-input">
          <span class="custom-file-control">{{ selectedFile }}</span>
        </label>
        <button class="col btn btn-md btn-secondary" type="submit" >{{ $t('upload') }}</button>
      </div>
    </form>
    <div v-if="result !== null" class="alert alert-dismissible fade show" v-bind:class="alertType" role="alert">
      <button type="button" class="close btn-md" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>{{ result }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'upload',
    data () {
      return {
        recordType: 'asn',
        alertType: 'alert-success',
        result: null,
        selectedFile: this.$t('placeholder.select-file')
      }
    },
    methods: {
      upload: function (e) {
        this.result = null
        let self = this
        let form = document.getElementById('upload')
        let fd = new FormData(form)

        this.$backend.uploadRecords({ data: fd }, function (error, response) {
          if (error) {
            self.alertType = 'alert-danger'
            self.result = error.statusText || this.$t('error.upload')
          } else {
            self.alertType = 'alert-success'
            self.result = this.$t('success.upload')
          }
        })
      },
      selected: function () {
        let element = document.getElementById('records')
        let f = element.files[0]
        if (f) {
          this.selectedFile = f.name
        } else {
          this.selectedFile = this.$t('placeholder.select-file')
        }
      }
    }
  }
</script>

<style scoped>
  div.upload-form {
    max-width: 500px;
  }

  div.alert {
    margin-top: 1px;
    margin-bottom: 1px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  button[type=submit] {
    padding-top: 9px;
    padding-bottom: 9px;
  }
</style>
