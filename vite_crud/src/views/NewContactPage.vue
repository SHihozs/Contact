<template>

<sui-card raised centered style="width: 35rem;" >

  <sui-card-content>
    <div class="ui divided selection list">
        <label><b>Contact</b></label>
        &nbsp;
        <div class="ui teal horizontal label">Add</div>
      </div>
  </sui-card-content>
  
  <sui-card-content>
    
   <form class="ui form">

       <div class="required field">
           <label>Contact ID</label>
           <input type="text" placeholder="Contact ID" v-model="Contact.cid" maxlength="4" required>
           <div class="ui pointing red basic label" id = "errorDisplay1" hidden = "true"></div>
       </div>

       <div class ="required field">
           <label>First Name</label>
           <input type="text" placeholder="First Name" v-model="Contact.firstname" required>
           <div class="ui pointing red basic label" id = "errorDisplay2" hidden = "true"></div>
       </div>

       <div class ="required field">
           <label>Last Name</label>
           <input type="text" placeholder="Last Name" v-model="Contact.lastname" required>
           <div class="ui pointing red basic label" id = "errorDisplay3" hidden = "true"></div>
       </div>

       <div class ="required field">
           <label>Mobile No</label>
           <input type="tel" placeholder="Mobile No" v-model="Contact.mobile" maxlength="10" required>
           <div class="ui pointing red basic label" id = "errorDisplay4" hidden = "true"></div>
       </div>

       <div class ="field">
           <label>Email</label>
           <input type="email" placeholder="example@mail.com" v-model="Contact.email">
           <div class="ui pointing red basic label" id = "errorDisplay5" hidden = "true"></div>
       </div>

       <div class ="field">
           <label>Facebook</label>
           <input type="text" placeholder="Facebook" v-model="Contact.facebook">
       </div>

       <div class ="field">
           <label>Image Url</label>
           <input type="url" placeholder="Image Url" v-model="Contact.imageUrl" >
       </div>


    <br>
    <center>
        <sui-button-group>
          
            <sui-button type="submit" id = "saveButton" basic color="blue" @click.prevent="addAPI" > 
               <sui-icon name="save" />Save
            </sui-button>

            <router-link to="/contactlistpage">

            <sui-button basic color="blue">
                <sui-icon name="close" color="red" />Close
            </sui-button>

            </router-link>
        </sui-button-group>

      <br>
      <br>

      <div class="ui form success" id = "successMessage" hidden = "true">
        <div class="ui success message">
          <div class="header">Contact Saved</div>
          <p>Press close to go back to Home Page</p>
        </div>
      </div>
      
        

    </center>
  
  </form>
  </sui-card-content>

</sui-card>


</template>

<script>
import axios from 'axios'
export default{
  name: 'NewContactPage',
  data(){
    return{
      Contact: {
        //รับค่ามาจาก V-model
        cid:       '',
        firstname: '',
        lastname:  '',
        mobile:    '',
        email:     '',
        facebook:  '',
        imageUrl:  ''
      }
    }
  },

  mounted() {
    document.getElementById("successMessage").hidden = true
    document.getElementById("saveButton").hidden = false

    document.getElementById("errorDisplay1").hidden = true
    document.getElementById("errorDisplay2").hidden = true
    document.getElementById("errorDisplay3").hidden = true
    document.getElementById("errorDisplay4").hidden = true
    document.getElementById("errorDisplay5").hidden = true
  },

  methods: {
    addAPI(){

      if(this.checkValidation()){
        let newContact = {
          cid:       this.Contact.cid,
          firstname: this.Contact.firstname,
          lastname:  this.Contact.lastname,
          mobile:    this.Contact.mobile,
          email:     this.Contact.email,
          facebook:  this.Contact.facebook,
          imageUrl:  this.Contact.imageUrl
        }

        // DEFAULT IMAGE
        if(newContact.imageUrl == ''){
          newContact.imageUrl = "https://nightswinger.github.io/vue-fomantic-ui/images/avatar/large/kristy.png"
        }

        //Backend
        axios.post('https://contact3196-backend.herokuapp.com/contacts',newContact)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
        
        document.getElementById("successMessage").hidden = false
        document.getElementById("saveButton").hidden = true
      }
    },
    
    checkValidation(){
      let isInfoValid = true;

      let validCID = /^\d{4}$/
      let validMobileFormat = /^\d{10}$/
      let validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      //Invalid data check

      document.getElementById("errorDisplay1").hidden = true
      document.getElementById("errorDisplay2").hidden = true
      document.getElementById("errorDisplay3").hidden = true
      document.getElementById("errorDisplay4").hidden = true
      document.getElementById("errorDisplay5").hidden = true

      if(!this.Contact.cid.match(validCID)){
        isInfoValid = false;
        document.getElementById("errorDisplay1").hidden = false
        document.getElementById("errorDisplay1").textContent = "Invalid Contact ID (4 Digits)"
      }

       if(this.Contact.cid == ''){
        isInfoValid = false;
        document.getElementById("errorDisplay1").hidden = false
        document.getElementById("errorDisplay1").textContent = "Please fill in the information"
      }

      if(this.Contact.firstname == ''){
        isInfoValid = false;
        document.getElementById("errorDisplay2").hidden = false
        document.getElementById("errorDisplay2").textContent = "Please fill in the information"
      }

      if(this.Contact.lastname == ''){
        isInfoValid = false;
        document.getElementById("errorDisplay3").hidden = false
        document.getElementById("errorDisplay3").textContent = "Please fill in the information"
      }

      if(!this.Contact.mobile.match(validMobileFormat)){
        isInfoValid = false;
        document.getElementById("errorDisplay4").hidden = false
        document.getElementById("errorDisplay4").textContent = "Invalid mobile number"
      }

      if(this.Contact.mobile == ''){
        isInfoValid = false;
        document.getElementById("errorDisplay4").hidden = false
        document.getElementById("errorDisplay4").textContent = "Please fill in the information"
      }

      if(!this.Contact.email.match(validEmailFormat) && this.Contact.email != ''){
        isInfoValid = false;
        document.getElementById("errorDisplay5").hidden = false
        document.getElementById("errorDisplay5").textContent = "Invalid email"
      }

      return isInfoValid
    }
  }
}


</script>