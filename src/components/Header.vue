<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-success bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">{{ $t('navbar-brand') }}</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-if="authenticated" class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/transactions/list">{{ $t('transactions') }} <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="authenticated" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('upload') }}</a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" to="/transactions/upload">ASN</router-link>
            <a class="dropdown-item" href="#">Rabobank</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('user') }}</a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link v-if="!authenticated" class="dropdown-item" to="/login">{{ $t('login') }}</router-link>
            <a v-if="authenticated" class="dropdown-item" href="#" @click.stop="logout()">{{ $t('logout') }}</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'f-header',
    data () {
      return {
        authenticated: this.$api.loggedIn()
      }
    },
    mounted: function () {
      let self = this
      this.$root.$on('login', function () {
        self.authenticated = true
      })
      this.$root.$on('logout', function () {
        self.authenticated = false
        window.location.href = '/'
      })
    },
    methods: {
      logout: function () {
        this.$api.logout()
      }
    }
  }
</script>

