<template>
  <div class="popup-container popup-login">

    <div class="popup-overlay" style="width:100%; height: 100%;">
    </div>

    <form class="popup" method="post">
      <header class="popup-header">
        <div class="popup-title">
          Login
        </div>
        <div class="popup-actions">
          <a class="popup-close" @click="close()">
            <i class="fa fa-times"></i>
          </a>
        </div>
      </header>

      <div class="popup-content">
        <div class="popup-content-overlay"></div>
        <div class="form-column-layout" data-action="process-login">

          <div class="form-global-error cloaked">
            <i class="icon fa fa-warning"></i>
            <span class="message"></span>
          </div>

          <div class="fields">

            <div class="form-field">
              <label class="form-label" for="email">Email</label>
              <div class="form-content">
                <label class="form-error" data-error-for="email" for="email"></label>
                <input id="email" class="form-input" type="email" name="email" value="" placeholder="you@email.com" required="" data-error-for="email" autofocus="">
              </div>
            </div>

            <div class="form-field password-field">
              <label class="form-label" for="password">
                <div class="name">Password</div>
                <a class="reset" data-action="open-resetpass">Lost password?</a>
              </label>
              <div class="form-content">
                <label class="form-error" data-error-for="password" for="password"></label>
                <input id="password" class="form-input" type="password" name="password" value="" required="" data-error-for="password">
              </div>
            </div>

            <div class="form-field form-buttons login-field">
              <div class="form-content">
                <button type="submit" class="form-button btn-large btn-primary">
                  <span class="state-normal">Log in</span>
                  <span class="state-progress"><i class="loading loading-light"></i> Loading</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        <hr class="form-separator">

        <p>Or log in with</p>

        <div class="social">
          <div class="form-field form-buttons">
            <a class="form-button btn-large btn-secondary" data-action="signup-facebook"><i class="fa fa-facebook"></i> Facebook</a>
            <a class="form-button btn-large btn-secondary" data-action="signup-google"><i class="fa fa-google"></i> Google</a>
            <a class="form-button btn-large btn-secondary" data-action="signup-twitter"><i class="fa fa-twitter"></i> Twitter</a>
          </div>
        </div>


      </div>

      <footer class="popup-footer">


        <div class="bridge">
          还没有账户? <a @click="openSignUp">点我注册!</a>
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
	export default {
		name: 'login',
		data () {
			return {}
		},
    methods:{
			close(){
        this.$parent.loginF = false;
      },
      openSignUp(){
        this.$parent.loginF = false;
        this.$parent.registerF = true;
      }
    }

	}
</script>
