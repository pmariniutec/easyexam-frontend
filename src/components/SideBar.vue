<template>
  <div class="sidebar">
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SideBar',
	data () { return {} },
	computed: {
		...mapGetters('auth', ['isAuthenticated'])
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.theme--light.v-btn {
	color: $primary;
}
.theme--light.v-btn.v-btn--outlined.v-btn--text {
	border-color: $primary;
}
.theme--light.v-sheet {
	max-height: 64px;
}

.sidebar {
  position: absolute;
  width: 70px;
  height: 99vh;
  margin: 5px;
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

