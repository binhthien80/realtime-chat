<template>
  <div class="main-login">
    <div id="container">
      <img class="logo" src="http://www.cfdesigner.com/codepen/rocket-page-logo.png">
      <h1>Rocket Page</h1>
      <section class="welcome">
        <p>Simple, custom, one-page websites for just about anything</p>
        <ul class="buttons">
          <li>
            <a class="primary" href="#">Log In</a>
          </li>
          <li>
            <a href="#">Explore Themes</a>
          </li>
        </ul>
      </section>

      <form id="login" class="hidden" method="#">
        <section>
          <div class="field">
            <label for="username">
              <svg class="icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
              </svg>
            </label>
            <input type="text" name="username" placeholder="Username">
          </div>
          <div class="field">
            <label for="password">
              <svg class="icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use>
              </svg>
            </label>
            <input type="password" name="password" placeholder="Password">
          </div>
        </section>
        <ul class="buttons">
          <li>
            <input type="submit" value="Log In" class="primary disabled">
          </li>
          <li>
            <a href="#" class="minor">&#10229; Go back</a>
          </li>
        </ul>
      </form>
    </div>

    <div id="footer">
      <ul>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" class="icons hidden">
      <symbol
        id="user"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="6.25%"
      >
        <path
          d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"
        ></path>
      </symbol>
      <symbol
        id="lock"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="6.25%"
      >
        <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23"></path>
        <circle cx="16" cy="24" r="1"></circle>
      </symbol>
    </svg>
  </div>
</template>
<script>
import Login from '@/assets/images/login.png'
import $ from 'jquery'

export default {
  name: 'Login',
  data () {
    return {
      Login
    }
  },
  mounted () {
    $(document).ready(function () {
      // display login form
      $('.welcome .primary').click(function () {
        $('.welcome').hide()
        $('form').fadeIn()
      })
      // display welcome
      $('form .minor').click(function () {
        $('form').hide()
        $('.welcome').fadeIn()
      })
      // form validation
      $('.field input').keyup(function () {
        var username = $.trim($('.field input[name=username]').val())
        var password = $.trim($('.field input[name=password]').val())
        if (username.length > 0 && password.length > 0) {
          $('form .primary').removeClass('disabled')
        } else {
          $('form .primary').addClass('disabled')
        }
      })
    })
  }
}
</script>
