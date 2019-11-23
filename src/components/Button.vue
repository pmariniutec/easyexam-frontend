<template>
	<button
		class="btn first"
		@click="handleClick"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {
			type: String,
			required: true
		}
	},
	methods: {
		handleClick () {
    	   this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
  .btn {
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid #23246E;
    border-radius: 0.6em;
    color: #23246E;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-family: 'Helvetica';
    font-size: 0.8rem;
    font-weight: 700;
    float: right;
    line-height: 1;
    padding: 0.8em 1.5em;
    text-decoration: none;
    text-align: center;

    &:hover,
    &:focus {
      color: #fff;
      outline: 0;
    }
  }

  .first {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px #23246E inset;
    }
  }
</style>
