<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">{{ $t('navbar-brand') }}</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-if="$auth.loggedIn()" class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">{{ $t('reports') }} <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="$auth.loggedIn()" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Upload</a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" to="/upload">ASN</router-link>
            <a class="dropdown-item" href="#">Rabobank</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gebruiker</a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link v-if="!$auth.loggedIn()" class="dropdown-item" to="/login">Inloggen</router-link>
            <a v-if="$auth.loggedIn()" class="dropdown-item" href="#" @click.stop="logout()">Uitloggen</a>
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
        authenticated: false
      }
    },
    methods: {
      logout: function () {
        this.$auth.logout(() => {
          this.$router.go('/')
        })
      }
    }
  }
</script>

