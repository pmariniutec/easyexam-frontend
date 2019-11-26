<template>
	<div class="text-center">
		<v-dialog
			v-model="dialog"
			width="500"
		>
			<v-card>
				<v-card-title
					class="headline grey lighten-2"
					primary-title
				>
					{{ title }}
				</v-card-title>

				<v-card-text>
					Once you commit this action there's no going back.
				</v-card-text>

				<v-divider />

				<v-card-actions>
					<v-spacer />
					<v-btn
						color="primary"
						text
						@click="onAccept"
					>
						I accept
					</v-btn>
					<v-btn
						color="primary"
						text
						@click="onDecline"
					>
						I decline
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: 'AreYouSureDialog',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Are you sure?'
		},
		dialog: {
			type: Boolean,
			required: true,
			default: false
		},
		onAccept: {
			type: Function,
			required: true,
			default: () => {}
		},
		onDecline: {
			type: Function,
			required: true,
			default: () => {}
		}
	}
}
</script>
