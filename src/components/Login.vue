<template>
  <div id="login" class="form-signin" :title="$t('login')">
    <h2 class="form-signin-heading">{{ $t('login') }}</h2>
    <label for="username" class="sr-only">{{ $t('username') }}</label>
    <input type="text" id="username" class="form-control" :placeholder="$t('username')" :value="credentials.username" required autofocus>
    <label for="password" class="sr-only">{{ $t('password') }}</label>
    <input type="password" id="password" class="form-control" :value="credentials.password" :placeholder="$t('password')" required @keyup.enter="login()">
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login()">{{ $t('login') }}</button>

    <div v-if="error !== null" class="alert alert-danger alert-dismissible fade show" role="alert">
      <button type="button" class="close btn-md" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>{{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'f-login',
    data () {
      return {
        error: null,
        credentials: {
          username: null,
          password: null
        }
      }
    },
    methods: {
      login: function () {
        let self = this
        this.error = null
        this.$auth.login(this.credentials, function (success) {
          if (success === true) {
            window.location.href = decodeURIComponent(self.$route.query.redirect || '/')
          } else {
            self.error = self.$t('error.login')
          }
        })
      }
    }
  }
</script>

<style scoped>
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
