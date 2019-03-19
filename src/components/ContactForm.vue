<template>
  <b-container id = "outer">
    <b-form-row
      class="my-1"
      v-for="form in forms"
      :key="form.label"
    >

      <b-col>
      </b-col>
      <b-col cols="7">
        <b-form-input
          :id="form.label"
          :type="form.type"
          :placeholder="form.label"
          v-model="form.result"
          :state="validInput(form.result)"
        ></b-form-input>
      </b-col>
      <b-col>
      </b-col>
    </b-form-row>

    <b-form-row class="my-1">
      <b-col>
      </b-col>
      <b-col cols="7">
        <b-form-textarea
          id="textarea-default"
          placeholder="Meddelande"
          rows="8"
          v-model="areaInput"
          :state="validInput(areaInput)"
        />
      </b-col>
      <b-col>
      </b-col>
    </b-form-row>

    <b-button
      @click="submit"
      :variant="validForms[0]"
      :disabled="validForms[1]"
    >Skicka</b-button>
  </b-container>

</template>
<script>
import axios from 'axios'
// import qs from 'qs'

export default {

  data () {
    return {
      forms: [
        { type: 'text', label: 'Namn', result: '' },
        { type: 'text', label: 'Företag', result: '' },
        { type: 'email', label: 'E-post', result: '' }
        // { type: 'number', label: 'Mobil: ' },
        // { type: 'url', label: 'Hemsida: ' }
      ],
      areaInput: ''
    }
  },
  methods: {
    validInput: function (input) {
      return input.length > 1
    },
    submit: function () {
      let params = {
        name: this.forms[0].result,
        company: this.forms[1].result,
        email: this.forms[2].result,
        msg: this.areaInput
      }
      axios.post('submit/script.php', params)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.forms[0].result = ''
      this.forms[1].result = ''
      this.forms[2].result = ''
      this.areaInput = ''
    }
  },
  computed: {

    validForms: function () {
      let danger = ['danger', true]
      let success = ['success', false]
      for (let i = 0; i < this.forms.length; i++) {
        if (this.forms[i].result === '') {
          return danger
        }
      }
      return this.areaInput === '' ? danger : success
    }
  }

}
</script>

<style scoped>
#outer{
  margin-bottom: 60px;
}
h1,
h2 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
