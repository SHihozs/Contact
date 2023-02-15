<template>

<sui-card raised centered style="width: 35rem;" >

  <sui-card-content>
    <div class="ui divided selection list">
        <label><b>Contact</b></label>
        &nbsp;
        <div class="ui teal horizontal label">Edit</div>
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
           <input type="text" placeholder="Mobile No" v-model="Contact.mobile" maxlength="10" required>
           <div class="ui pointing red basic label" id = "errorDisplay4" hidden = "true"></div>
       </div>

       <div class ="field">
           <label>Email</label>
           <input type="text" placeholder="example@mail.com" v-model="Contact.email">
           <div class="ui pointing red basic label" id = "errorDisplay5" hidden = "true"></div>
       </div>

       <div class ="field">
           <label>Facebook</label>
           <input type="text" placeholder="Facebook" v-model="Contact.facebook">
       </div>

       <div class ="field">
           <label>Image Url</label>
           <input type="text" placeholder="Image Url" v-model="Contact.imageUrl">
       </div>

       
  </form>

    <br>
    <center>
        <sui-button-group>
          
            <sui-button  @click="updateAPI" basic color="blue">
                <sui-icon name="save" />Save
            </sui-button>

          <router-link to="/contactlistpage">
               <sui-button basic color="blue">
                  <sui-icon name="close" color="red" />Close
               </sui-button>
          </router-link >

        </sui-button-group>

        <br>
        <br>

        <div class="ui form success" id = "successMessage" hidden = "true">
          <div class="ui success message">
            <div class="header">Edit Successful</div>
            <p>Press close to go back to Home Page</p>
          </div>
        </div>
      </center>

  </sui-card-content>

</sui-card>


</template>

<script>
import axios from 'axios'
export default{
  name: 'EditContactPage',
  data(){
    return{
      Contact: {
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

  mounted() {//ตอนเปิดหน้าเว็บนี้มาให้ทำอะไรบ้าง
      document.getElementById("errorDisplay1").hidden = true
      document.getElementById("errorDisplay2").hidden = true
      document.getElementById("errorDisplay3").hidden = true
      document.getElementById("errorDisplay4").hidden = true
      document.getElementById("errorDisplay5").hidden = true

      document.getElementById("successMessage").hidden = true

      //อ่านค่าเก่าขึ้นมาก่อน
       axios.get('https://contact3196-backend.herokuapp.com/contacts/' + this.$route.params.id)
            .then((response) => { 
                this.Contact = response.data
                console.log(this.Contact)
            })
            .catch((error) => {
                 console.log(error)
            })
  },
  
  methods: {
    updateAPI(){

      if(this.checkValidation()){
        //รับค่ามาจาก V-model
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

        //update ค่า --> ใช้ POST
        axios.post('https://contact3196-backend.herokuapp.com/contacts/' + this.$route.params.id, newContact)
           .then((response) => {
                  console.log(response.data)
            })
            .catch((error) => {
                  console.log(error)
            })  
        document.getElementById("successMessage").hidden = false
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

      return isInfoValid;
    }
  }
}


</script>