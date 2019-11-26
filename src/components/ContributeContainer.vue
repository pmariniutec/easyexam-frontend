<template>
	<div class="container">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ContributeContainer'
}
</script>

<style scoped>
	.container {
		position: fixed;
	  margin: 135px 8% 0 25%;
	  width: 50%;
		height: 74%;
	  background-color: #FFFFFF;
	  padding: 40px 50px;
	  border-radius: 14px;
	  box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
	}
</style>
