<template>
  <div class="container">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>{{ $t('date') }}</th>
          <th>{{ $t('amount') }}</th>
          <th>{{ $t('counterparty.accountno') }}</th>
          <th>{{ $t('description') }}</th>
          <th>{{ $t('actions') }}&nbsp;&nbsp;
            <button v-if="showEditTransactions" type="button" class="btn btn-info btn-sm" data-toggle="modal"
                    data-target="#labelEditor">{{ editButtonText }}</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions">
          <td><span class="text-nowrap">{{ moment.tz(transaction.ProcessingDate, 'Europe/Amsterdam').format('DD-MM-YYYY') }}</span></td>
          <td>{{ transaction.TransactionAmount }}</td>
          <td>{{ transaction.CounterPartyAccountNumber }}</td>
          <td>{{ maybeTruncate(transaction.Description) }}</td>
          <td>
            <button v-if="!staged(transaction)" type="button" class="btn btn-secondary" @click="stageTransaction(transaction)">{{ $t('stage-transaction') }}</button>
            <button v-if="staged(transaction)" type="button" class="btn btn-secondary" @click="unstageTransaction(transaction)">{{ $t('unstage-transaction') }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="labelEditor" tabindex="-1" role="dialog" aria-labelledby="labelEditorTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="labelEditorTitle" class="modal-title">{{ $t('add-labels') }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <f-label-area :labels="staging.labels" ></f-label-area>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('cancel') }}</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="saveStaged" >{{ $t('save') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment-timezone'
  import FLabelArea from './LabelArea'

  export default {
    name: 'f-uploaded-transactions',
    components: {FLabelArea},
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
        transactions: [],
        staging: {
          transactions: [],
          labels: []
        },
        showEditTransactions: false
      }
    },
    methods: {
      staged: function (transaction) {
        return this.staging.transactions.includes(transaction)
      },
      maybeTruncate: function (text) {
        if (!text) {
          return text
        } else if (text.length > 52) {
          return text.substr(0, 52) + '...'
        }
        return text
      },
      stageTransaction: function (transaction) {
        if (!this.staging.transactions.includes(transaction)) {
          this.staging.transactions.push(transaction)
          this.showEditTransactions = true
        }
      },
      unstageTransaction: function (transaction) {
        let index = this.staging.transactions.indexOf(transaction)
        if (index !== -1) {
          this.staging.transactions.splice(index, 1)

          if (this.staging.transactions.length === 0) {
            this.showEditTransactions = false
            this.staging.labels = []
          }
        }
      },
      saveStaged: function () {
        console.log(this.staging)
        this.showEditTransactions = false
        this.staging.transactions.clear()
        this.staging.labels.clear()
      }
    },
    computed: {
      editButtonText: function () {
        return this.$t('edit-transaction-labels', {
          replace: {
            '__AMOUNT__': this.staging.transactions.length
          }
        })
      }
    }
  }
</script>
