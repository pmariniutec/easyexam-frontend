<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
              <h2>Name</h2>
            </v-col>
            
            <v-col class="text-center">
              <h2>Rating</h2>
            </v-col>

            <v-col class="text-center">
              <h2>Questions</h2>
            </v-col>

            <v-col class="text-center">
              <h2>Last Modified</h2>
            </v-col>

            <v-col class="text-center">
              <h2>Date Created</h2>
            </v-col>
        </v-row>
        <div v-for="{name, rating, number, date_edit, date_create} in exam_info">
	        <v-row>
                <v-col class="text-center">
                  {{name}} 
                </v-col>
                
                <v-col class="text-center">
                  <star-rating :rating="rating" :padding="15" :increment="0.5" :star-size="25" :read-only="true" :show-rating="false" ></star-rating>
                </v-col>

                <v-col class="text-center">
                  {{ number }} 
                </v-col>

                <v-col class="text-center">
                  {{ date_edit }}
                </v-col>

                <v-col class="text-center">
                  {{ date_create }}
                </v-col>

	        </v-row>
        </div>
      <v-col md=5>
        <button @click="addFind">
            Add test
        </button>
      </v-col>
    </v-container>

</template>

<script>


export default {
	name: 'ViewExam',

	data() {
        return {
            exam_info: []
        };
	},

	computed: {
	},


	methods: {
        addFind: function () {
            this.exam_info.push({ name: 'hola', rating: 2.5, number: 10, date_edit: '10/10/10', date_create: '10/10/10' } )
        }
	}
}
</script>

<style lang="scss">
.container {
    display: grid;
    grid-template-row: 20%  20%  20%  20%  20%;
}
.v-col {
    justify-items: center;
}
</style>
