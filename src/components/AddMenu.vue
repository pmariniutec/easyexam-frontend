<template>
	<div class="menu">
		<input
			id="toggle"
			class="inputs"
			type="checkbox"
		>
		<label
			id="show-menu"
			for="toggle"
		>
			<div class="btns">
				<IconAdd class="toggleBtn menuBtn" />
				<IconClose class="toggleBtn closeBtn" />
			</div>
			<div class="btns">
				<router-link
					:to="{name: 'examEditor'}"
					style="height: 49%; text-decoration: none;"
				>
					<v-icon
						color="#fff"
						size="28"
					>mdi-pencil-plus-outline</v-icon>
				</router-link>
			</div>
			<div class="btns">
				<QuestionNewModal @refresh="forceRender()" />
			</div>
		</label>
	</div>
</template>

<script>
import QuestionNewModal from '@/pages/Contribute/QuestionNewModal'
import IconAdd from '@/components/icons/IconAdd'
import IconClose from '@/components/icons/IconClose'
import IconEdit from '@/components/icons/IconEdit'
import IconQuestion from '@/components/icons/IconQuestion'

export default {
	name: 'AddMenu',
	components: {
		QuestionNewModal,
		IconAdd,
		IconClose,
		IconEdit,
		IconQuestion
	}
}
</script>

<style>
  .inputs {
    position: absolute;
    display: none;
  }

  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .menu {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
  }

  .btns {
    width: 50px;
    height: 50px;
    border-radius: 70px;
    position: absolute;
    overflow: hidden;
    cursor: pointer;
  }

  .btns {
    background: #4DB8DE;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .btns:not(:first-child) {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    z-index: -2;
    -webkit-transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);
    transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);
  }

  .btns:nth-child(2) {
    top: 0px;
    left: 0px;
    background: #FD7576;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .btns:nth-child(3) {
    top: 0px;
    left: 0px;
    background: #FEC85D;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s
  }

  input#toggle:checked ~ #show-menu .btns:nth-child(2) {
    left: -80px;
    top: -30px;
    opacity:1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  }

  input#toggle:checked ~ #show-menu .btns:nth-child(3) {
    top: -80px;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  }

  .menuBtn, .closeBtn {
    position: absolute;
    transition: all 0.3s ease;
  }

  .closeBtn {
    transform: translateY(50px);
    opacity: 0;
  }

  input#toggle:checked ~ #show-menu .btns .menuBtn {
    transform: translateY(-50px);
    opacity: 0;
  }

  input#toggle:checked ~ #show-menu .btns .closeBtn {
    transform: translateY(0px);
    opacity: 1;
  }

</style>
