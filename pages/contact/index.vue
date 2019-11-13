<template>
  <div class="container">
    <h1>Contact</h1>
    <form
      name="contact"
      action="/contact/submitted"
      method="POST"
      data-netlify="true"
    >
      <div class="group">
        <label for="name">Name</label>
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="your name"
          required
        />
      </div>
      <div class="group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="your@email.com"
          name="name"
          required
        />
      </div>
      <div class="group">
        <label for="message">Message</label>
        <textarea
          cols="30"
          rows="10"
          name="message"
          placeholder="please enter your message..."
          v-model="message"
          required
        ></textarea>
      </div>
      <input class="submit-button" type="submit" :disabled="isDisabled" />
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact'
    };
  },
  data: function() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  computed: {
    isDisabled: function() {
      return !this.name && !this.email && !this.message;
    }
  }
};
</script>

<style scoped>
form {
  width: 75%;
  margin: 0 auto;
}

.group {
  margin-bottom: 1rem;
}

.group label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.group input {
  width: 100%;
  display: block;
  height: 2rem;
  padding: 0.5rem;
  font-family: var(--primary-font);
  font-size: 1rem;
  border-radius: 5px;
}

.group textarea {
  width: 100%;
  display: block;
  padding: 0.5rem;
  font-family: var(--primary-font);
  font-size: 1rem;
  border-radius: 5px;
}

.submit-button {
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px;
  font-family: var(--secondary-font);
  text-decoration: none;
  color: var(--primary-color);
  width: 100%;
}

.submit-button:hover {
  border-color: var(--secondary-color);
  cursor: pointer;
  color: var(--secondary-color);
}

.submit-button:disabled {
  cursor: not-allowed;
  border-color: var(--dim);
  color: var(--dim);
}
</style>
