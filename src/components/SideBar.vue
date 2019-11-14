<template>
  <div class="sidebar">
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'SideBar',
	data () { return {} },
	computed: {}
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  width: 70px;
  height: 99vh;
  margin: 0 5px;
  border-radius: 4px;
  background-color: #ffffff;
  transform: translateX(0);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.sidebar-menu {
  font-weight: 600;
  color: transparent;
}
.sidebar-menu-item {
  font-size: 36px;
  cursor: pointer;
}
</style>

