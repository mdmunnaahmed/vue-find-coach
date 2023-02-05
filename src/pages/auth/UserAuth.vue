<template>
  <form action="" @submit.prevent="submitForm">
    <base-card>
      <div class="form-control">
        <label for="">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsVaild">
        <small>Please enter all the inputs</small>
      </p>
      <base-button>{{ submitBtnCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchMode">{{
        switchBtnCaption
      }}</base-button>
    </base-card>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsVaild: true,
      mode: 'login',
    };
  },
  computed: {
    submitBtnCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchBtnCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    submitForm() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsVaild = false;
        return;
      }
      if (this.mode === 'login') {
        console.log(123);
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        });
      }
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>



<style scoped>
form {
  border-radius: 12px;
  padding: 3rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>