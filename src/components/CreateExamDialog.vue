<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="cyan"
          dark
          medium
          fixed
          bottom
          right
          fab
          v-on="on"
        > 
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          primary-title
        >
          Create new exam
        </v-card-title>

        <v-divider/>

        <v-card-text>
          <v-container>
            <v-row
              nogutters
            >
              <v-col lg=6>
                <v-text-field label="Title"></v-text-field>
                <v-text-field label="Course"></v-text-field>
                <v-text-field label="College"></v-text-field>
                <v-row
                  nogutters
                >
                  <v-col lg=6>
                    <v-text-field label="Start time"></v-text-field>
                  </v-col>
                  <v-col lg=6>
                    <v-text-field label="End time"></v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  nogutters
                >
                  <v-col lg=6>
                    <DateField/>
                  </v-col>
                  <v-col lg=6>
                    <v-text-field label="Grading"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg=6>
                <v-text-field label="Teacher's name"></v-text-field>
                <v-text-field label="Course's code"></v-text-field>
                <v-textarea label="Keywords"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="purple darken-4"
            rounded
            dark
            medium
            @click="dialog = false"
            class="create-button"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DateField from '@/components/DateField'

export default {
	name: 'CreateExamDialog',
  components: {
    DateField
  },
	data: () => ({
    dialog: false,
  }),
}
</script>

<style scoped>
.create-button {
  margin: 0 0 10px 40%;
}
</style>

