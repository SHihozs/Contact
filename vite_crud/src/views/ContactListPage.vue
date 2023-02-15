<template>

    <sui-segment>
    
    <!-- SEARCH -->
   <div class="ui teal segment">
    <sui-grid-column>
        <div class="input-group">
            <sui-label ribbon color="teal">Contacts</sui-label>
            <input type="text" class="form-control" placeholder="Search..." v-model="search">
            
                <div class="input-group-append">
                  
                    <!-- <sui-button color="gray"   attached="left">Search</sui-button> -->
                    
                    <!-- ADD CONTACT LIST -->
                    <router-link to="/newcontactpage">
                        <sui-button color="orange" attached="right">+ Add</sui-button>
                    </router-link>

                </div>
        </div>
    </sui-grid-column>
  </div>

    <!-- CARD -->

   <sui-segment>
   <div class="ui four doubling cards">
    <sui-card v-for="contact_alias in filterContact" v-bind:key="contact_alias.id">
     <sui-image class="card-img-top" v-bind:src= "contact_alias.imageUrl" />
        <sui-card-content>
            <sui-card-header><center><font size="5px"><b>{{ contact_alias.firstname }} {{contact_alias.lastname}}</b></font></center></sui-card-header>
        <sui-card-meta>
        <center>
          Mobile    : {{contact_alias.mobile}}    <br>
          Email     : {{contact_alias.email}}     <br>
          Facebook  : {{contact_alias.facebook}}  <br>
        </center>
        </sui-card-meta>

        
      </sui-card-content>
      <br>
      <sui-card-content extra>
            <div style="text-align : center">

                 <!-- UPDATE -->
                 <router-link :to="{ path: 'editcontactpage', name: 'EditContactPage', params:{id: contact_alias._id} }">
                    <sui-button color="blue" icon > <sui-icon name="edit" /></sui-button>
                 </router-link>   

                 <!-- DELETE -->
                    <sui-button color="red"  icon @click="DELETE(contact_alias._id)"> <sui-icon name="eraser" /></sui-button>
            </div>
        </sui-card-content>
    </sui-card>

   </div>
   </sui-segment>
   </sui-segment>
</template>

<script>
import axios from 'axios'

export default {

    name: 'ContactListPage',
    props:{

    },
    data(){
      return{
        search: '',
        Contacts: []

      }
    },

    mounted() {
     //connect API
     axios.get('https://contact3196-backend.herokuapp.com/contacts')
          .then((response) => {
            console.log(response.data)
            this.Contacts = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    },

    methods: {
      DELETE(id){
        axios.delete('https://contact3196-backend.herokuapp.com/contacts/'+id)
        .then(() => {
          console.log('Delete User ID: '+id)
        })
        .catch((error) => {
            console.log(error)
        })
        window.location.reload() //refresh หน้าจอ
      }
    },

    computed : {
      filterContact: function(){
        return this.Contacts.filter((contact) => {
            return contact.firstname.toLowerCase().match(this.search.toLowerCase()) || contact.lastname.toLowerCase().match(this.search.toLowerCase()) || ( contact.firstname.toLowerCase() + " " + contact.lastname.toLowerCase()).match(this.search.toLowerCase())
        })
      }
    }

}
</script>

<style>

.card-img-top {
  width: 100%;
  height: 50vh;

  object-fit: cover;
  /* object-fit: contain; */
  
}

</style>


