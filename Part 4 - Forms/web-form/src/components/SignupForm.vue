<template>
  <form
    @submit.prevent="handleSubmit"
    @keydown.enter.prevent>
    <label for="">Email:</label>
    <input
      type="email"
      v-model="email"
      required />
    <label for="">Password:</label>
    <input
      type="password"
      v-model="password"
      required />
    <div
      class="password-error"
      v-if="passwordError">
      {{ passwordError }}
    </div>
    <label for="">Role</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input
      type="text"
      v-model="tempSkill"
      @keyup="addSkill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click.self="handleDelete(skill)">
      {{ skill }}
    </div>

    <div class="terms">
      <input
        type="checkbox"
        required
        v-model="terms" />
      <label for="">I understand the Terms and Conditions</label>
    </div>
    <div class="newsletter">
      <input
        type="checkbox"
        v-model="newsletter" />
      <label for="">Sign up for our weekly newsletter</label>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: '',
        terms: false,
        newsletter: true,
        tempSkill: [],
        skills: [],
        index: '',
        passwordError: '',
      }
    },
    methods: {
      addSkill(e) {
        if (e.key === 'Enter') {
          if (!this.skills.includes(this.tempSkill)) {
            this.skills.push(this.tempSkill)
          }
          this.tempSkill = ''
        }
      },

      handleDelete(skill) {
        this.index = this.skills.indexOf(skill)
        this.skills.splice(this.index, 1)
      },

      handleSubmit() {
        console.log('Form Submitted!')
        // Password Validation
        this.passwordError =
          this.password.length > 5 ? '' : 'Password is not long enough!'
      },
    },
  }
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input,
  select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  button {
    background: rgb(60, 60, 255);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
  }

  .submit {
    text-align: center;
  }

  .password-error {
    font-size: 12px;
    margin-top: 10px;
    color: red;
  }
</style>
