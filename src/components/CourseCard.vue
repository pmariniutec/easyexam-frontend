
<template>
    <v-card :style="bgc"
            class="mx-5 my-5"
            outlined>
        <v-list-item two-line>
            <v-list-item-title class="headline mb-1">
                {{course_info.name}}
            </v-list-item-title>
        </v-list-item>
        <v-card-actions>
            <v-btn @click="viewCourse($event, course_info.name)"
                text
                color="deep-purple accent-4" >
                View
            </v-btn>
            <v-btn
                text
                color="red accent-4" >
                Delete 
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>

export default {
	name: 'CourseCard',
    props: {
        course_info: {
            type: Object,
            required: true,
            default: () => {}
        }       
    },
	components: {

	},

    data: () => ({
        bgc: {
            backgroundColor: ''
        }
	}),
	computed: {

	},
    beforeMount() {
        this.generator()
    },
	methods: {
      generator: function(event){
        let g_scale = Math.floor(Math.random() * (16 - 12) + 12).toString(16)
        this.mycolor = '#'+(g_scale.repeat(6))
        this.bgc.backgroundColor = this.mycolor
      },
      viewCourse: function(event, name) {
        this.$router.push({ path: `/courses/${name}` })
      }
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.v-card {
}
</style>
