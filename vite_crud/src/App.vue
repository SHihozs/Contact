<template>
    <!-- HEADER -->
    <sui-menu inverted>
      <sui-menu-item as="div"><img src="../src/assets/logo.png"></sui-menu-item>
      
        <sui-menu-item>Contact</sui-menu-item>

      <sui-menu-menu position="right">
        <sui-icon name="user" size="big" inverted circular/>
      </sui-menu-menu>
    </sui-menu>

  <!-- เรียก path เเละ component ของเเต่ละหน้าได้ -->
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

</script>