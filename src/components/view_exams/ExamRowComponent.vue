<template>
    <v-card max-height="100" class="mx-auto">
        <vue-context ref="menu"
                     :close-on-click="closeOnClick">
            <template slot-scoped="child" >
                <li>
                    <a  href="#"
                        @click.prevent="onClick($event.target.innerText, child.data)">

                        <v-icon small left >mdi-eye</v-icon> 
                        Preview
                    </a>
                </li>
                <li>
                    <a  href="#"
                        @click.prevent="onClick($event.target.innerText, child.data)" >

                        <v-icon small left >mdi-download</v-icon> 
                        Download
                    </a>
                </li>
                <li>
                    <a  href="#"
                        @click.prevent="onClick($event.target.innerText, data)">

                        <v-icon small left >mdi-lead-pencil</v-icon> 
                        Edit Name
                    </a>
                </li>
                <v-divider></v-divider>
                <li>
                    <a  href="#"
                        @click.prevent="onClick($event.target.innerText, data)">

                        <v-icon small left >mdi-delete</v-icon> 
                        Delete
                    </a>

                </li>
            </template>
        </vue-context>
        <v-row class="grey--text text--darken-1 text-center"
                flat 
                @contextmenu.prevent="$refs.menu.open($event, {data: 'data_info'})">

            <v-col >
                <v-icon dense left color="blue">mdi-file-document</v-icon> 
                {{ exam_info.name }}
            </v-col>


            <v-col class="centered">
                <star-rating
                    :rating="exam_info.difficulty"
                    :padding="15"
                    :increment="0.5"
                    :star-size="15"
                    :read-only="true"
                    :show-rating="false"
                />
            </v-col>

            <v-col>
                {{ exam_info.number }} questions
            </v-col>

            <v-col>
                {{ exam_info.date_edit }}
            </v-col>

            <v-col>
                {{ exam_info.date_create }}
            </v-col>
        </v-row>
    </v-card>
</template>
<script>

import { VueContext } from 'vue-context'

export default {
	name: 'ExamRowComponent',
    props: {
        exam_info: {
            type: Object,
            required: true,
            default: () => {}
        }       
    },
	components: {
		VueContext
	},

	data () {
		return {
            closeOnClick: true,
		}
	},
	computed: {

	},
	methods: {
        onClick (text, data) {
            console.log(data);
        },
        openMenu(event, data) {
            this.$refs.menu.open(event, data);
        }
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.centered {
    display: grid;
    justify-content: center;
    align-items: center;
    
}
</style>
