<template>
	<div class="sidebar">
		<ul class="sidebar-menu">
			<li class="sidebar-menu-item">
				<v-icon>mdi-backburger</v-icon>
			</li>
			<li class="sidebar-menu-item">
				<v-icon>mdi-home</v-icon>
			</li>
			<li class="sidebar-menu-item">
				<v-card hover="true" :elevation=0>
					<v-icon>mdi-book-open-page-variant</v-icon>
				</v-card>
			</li>
			<li class="sidebar-menu-item">
				<v-icon>mdi-clipboard-list</v-icon>
			</li>
			<li class="sidebar-menu-item">
				<v-icon>mdi-settings</v-icon>
			</li>
			<li class="sidebar-menu-item">
				<v-icon>mdi-account</v-icon>
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
.class1 {
	
}
.class2 {
	backgroud-color: red;
	color: red;
}
</style>
