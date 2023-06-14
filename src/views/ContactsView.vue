<script>
import AppBanner from '../components/AppBanner.vue';

export default {
  name: "ContactsView",
  components: { AppBanner }
}
</script>

<template>
  <AppBanner title="Contacts"></AppBanner>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name: </label>
        <input type="text" name="name" id="name" class="form-control" placeholder="Mario" aria-describedby="nameHelper">
        <small id="nameHelper" class="text-muted">Type your name here</small>
      </div>

      <div class="mb-3">
        <label for="lastname" class="form-label">Lastname: </label>
        <input type="text" lastname="lastname" id="lastname" class="form-control" placeholder="Rossi"
          aria-describedby="lastnameHelper">
        <small id="lastnameHelper" class="text-muted">Type your lastname here</small>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email: </label>
        <input type="email" email="email" id="email" class="form-control" placeholder="mariorossi@gmail.com"
          aria-describedby="emailHelper">
        <small id="emailHelper" class="text-muted">Type your email here</small>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message: </label>
        <textarea class="form-control" name="message" id="message" rows="3" placeholder="Write here ..."></textarea>
      </div>

      <button type="submit" class="btn btn-dark mb-3">
        Send
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send"
          viewBox="0 0 16 16">
          <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
        </svg>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>