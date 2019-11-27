<template>
	<div class="input-container">
		<label for="idt">
			<input
				type="text"
				placeholder=""
				:value="data"
				@input="update($event.target.value)"
			>
			<span class="label">{{ title }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'Input',
	model: {
		prop: 'data',
		event: 'input'
	},
	props: {
		title: {
			type: String,
			required: true
		},
		data: {
			type: String,
			default: ''
		}
	},
	methods: {
		update: function (value) {
			this.$emit('input', value)
		}
	}
}
</script>
<style scoped>
  .input-container {
    position: relative;
    margin: 0 0 35px 0;
  }
  label {
  	width: 100%;
    display: inline-flex;
  }
  .inp {
    position: relative;
    margin: auto;
    width: 100%;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: #67707D;
    transform-origin: 0 0;
    transition: all .2s ease;
	}
  .border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #0077FF;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all .15s ease;
	}
  input {
    -webkit-appearance: none;
    width: 100%;
    border: 1px solid #DBDBDB;
		border-radius: 12px;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    padding: 7px;
    height: 40px;
    background-color: white;
    color: #223254;
  	transition: all .15s ease;
	}
  input:hover {
      background-color: white;
		}
  input:not(:placeholder-shown) + span {
  	color: #5A667F;
    transform: translateY(-32px) translatex(-10px) scale(1);
	}
	input:focus {
		outline: none;
	}
  input:focus + span {
      background: none;
      outline: none;
      color: #67707D;
      transform: translateY(-32px) translatex(-10px) scale(1);
	}
</style>
