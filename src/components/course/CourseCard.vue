
<template>
	<v-card
		:style="bgc"
		class="course-card my-2"
		outlined >
        <v-app-bar
          dark
          color="gray"
        >

          <v-toolbar-title>	{{ courseInfo.name }} : {{courseInfo.code}} </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            left 
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list 
                nav
            >

              <v-list-item
                @click="() => {}" >
                <v-list-item-title> Delete </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-app-bar>
		<v-card-actions>
			<v-btn
				text
                elevation="5"
                block
				color="deep-purple accent-4"
				@click="viewCourse($event, courseInfo.name)"
			>
				View
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>

export default {
	name: 'CourseCard',
	components: {

	},
	props: {
		courseInfo: {
			type: Object,
			required: true,
			default: () => {}
		}
	},

	data: () => ({
		bgc: {
			backgroundColor: '#DDDDDD'
		}
	}),
	computed: {

	},
	methods: {
		viewCourse: function (event, name) {
			this.$router.push({ path: `/courses/${name}` })
		},
        removeCourse: function (event, uuid) {
           //TODO  remove course from DB and delete all exams related to it 
        }
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.course-card{
    width: 24vw;
}
</style>
