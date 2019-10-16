<template>
  <div id="app" class="app">
    <div class="navigation">
      <ul>
        <li>
          <router-link to="/chat">Chat</router-link>
        </li>
        <li>
          <router-link to="/tabs">Tabs</router-link>
        </li>
        <li>
          <router-link to="/notification">Notification</router-link>
        </li>
        <li>
          <router-link to="/todoItem">TodoItem</router-link>
        </li>
        <li>
          <router-link to="/shoppingCart">ShoppingCart</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scope>
.app {
  width: 1900px;
}
.navigation {
  width: 20%;
  float: left;
}
.content {
  width: 70%;
  float: left;
}
</style>
