<template>
	<div
		class="panel-container"
	>
		<v-card-title
			primary-title
		>
			<v-row>
				<h1>My profile</h1>
			</v-row>
		</v-card-title>

		<v-card-text>
			<v-form v-model="valid">
				<v-text-field
					v-model="getUserObj.firstName"
					label="First Name"
				/>
				<v-text-field
					v-model="getUserObj.lastName"
					label="Last Name"
				/>
				<v-text-field
                    disabled="true"
					v-model="getUserObj.email"
					label="Email"
				/>
			</v-form>
		</v-card-text>
        <v-btn
            color="primary"
            class="profile-btn"
        >
            Save
        </v-btn>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'ProfilePanel',
	components: {
	},
	data: () => ({
		user: {
			firstName: 'firstName',
			lastName: 'lastName',
			email: 'email'
		}
	}),
    computed: {
        ...mapGetters('auth', ['getUser']),
        getUserObj () {
                return this.getUser
        } 
    },
      beforeMount () {
        this.fetchUser()
      },
    methods: {
        ...mapActions('auth', ['userDetail']),
        fetchUser: async function() {
            await this.userDetail()
        }
    }
    
}
</script>

<style lang="scss" scoped>
.panel-container {
  height: 96vh;
  overflow-y: auto;
}
.profile-btn {
    float: right;
}
</style>
