<template>
  <div id="app">
    <nav>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292e34;
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #747474;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
