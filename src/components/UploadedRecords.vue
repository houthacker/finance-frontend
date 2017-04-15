<template>
  <div class="container">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>{{ $t('date') }}</th>
        <th>{{ $t('amount') }}</th>
        <th>{{ $t('counterparty.accountno') }}</th>
        <th>{{ $t('actions') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions">
        <td>{{ moment.tz(transaction.ProcessingDate, 'Europe/Amsterdam').format('DD-MM-YYYY') }}</td>
        <td>{{ transaction.TransactionAmount }}</td>
        <td>{{ transaction.CounterPartyAccountNumber }}</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import moment from 'moment-timezone'

  export default {
    name: 'f-uploaded-transactions',
    mounted: function () {
      let self = this
      this.$api.getUploadedRecords(function (response, error) {
        if (error) {
          console.error(error)
        } else {
          self.transactions = response.data
        }
      })
    },
    data  () {
      return {
        moment: moment,
        transactions: []
      }
    }
  }
</script>
