<template>
    <v-card-actions>
      <v-btn color="blue darken-1" text @click="openPdf()">Preview</v-btn>
    </v-card-actions>
</template>

<script>
import pdf from 'vue-pdf'

export default {
	name: 'Preview',
    props: {
        pdfLink: ''
    },
    components: {
    },
    methods: {
        openPdf: function() {  
            let routeData = this.$router.resolve({ name: 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0776-front-end-developer-handbook-2018.pdf'});
            window.open(routeData.href, '_blank'); 
            
        }
    },
	data () {
		return {
		}
	}
}
</script>

<style>

</style>
