## Authors
- [Devicez](https://github.com/Devicez)
- [SHihozs](https://github.com/SHihozs)


## Document
- Repository URL : https://bitbucket.org/shihoz/contact3196
- Vue Server : https://contact3196-frontend.herokuapp.com
- Node Server : https://contact3196-backend.herokuapp.com
- Demonstation: https://drive.google.com/file/d/1fM2wH2ovK-MtC89fCEoE81M3z41byC3k/view?usp=sharing

## Start Project
      1. clone project
      2. install node module 
      3. start backend server & frontend server using npm run dev
      
## Requirement
      o Create the video demonstration of your assignment (.mov, .avi or .mp4 ) and upload to your bitbucket under “Info” folder.
      o Use Mongo Atlas as your cloud database
      o Deploy your Frontend and Backend to the Google Cloud server, Heroku or MS Azure server


Create the “Contact List” web application by using Node.js and/or Vue.js(v3). This web application must contain the list of features below. Your Vue project name must be “Contact<Last 4 Digits of StudentID>” such as Contact2345. 

### (1 mark) Use MongoDB for your database.
        o Set your database name: ContactList
        o Set your collection name: Contacts
### UI can be download from Formatic UI
        Semantic UI: https://github.com/nightswinger/vue-fomantic-ui
### The images can be downloaded from this URL below:
        https://nightswinger.github.io/vue-fomantic-ui/views/card
        
### Login Page: (2 marks) 
      - User can access the contact list in Figure 1 after their login.
      - You must create a simple login page (Figure 2) that can use to check username and password whether they can be matched with one of usernames and passwords in the database.
      - Set one of your accounts in database must be:Username: bob Password: 1234

### New Contact Page: (2 marks) 
      - When user clicks “+ Add” button (Orange button), it will go to “New Contact Page” as shown below. When “Save” button is clicked, the information in this form will be saved to database via “add” API
      
### Edit Contact Page: (3 marks) 
      - When the user clicks at “Edit” button (Blue button), it will go to “Edit Contact” page. After the information has been edited and save button is clicked, the information
will be saved to database.

### Delete: (2 mark) 
      - When user clicks at “Delete” button (Red button), that contact will be removed from database and also removed from Contact List page

### Search: (3 marks) 
      - User can search a contact according to the FirstName or LastName.

### NODE API: (7 marks) 
      - This web application must integrate with the REST API as shown below. Your NodeJS’s filename to run all API must be “server.js”
      
## Example of CRUD for REST API

#### 1. post http://localhost:3000/contacts/Add new contact
        {
         "cid" : "<Contact id>",
         "firstname" : "<Contact firstname>",
         "lastname" : "<Contact lastname>",
         "email" : "<Contact email>",
         "mobile" : "<Contact mobile number>",
         "facebook" : "<Contact facebook>",
         "imageUrl" : "<Contact imake>"
        }
        
#### 2. get http://localhost:3000/contacts/  (*Show all contact)
#### 3. get http://localhost:3000/contacts/:id  (*Show one contact)
#### 4. post http://localhost:3000/contacts/:id   (*Edit a contact)
        {
         "cid" : "<Contact id>",
         "firstname" : "<Contact firstname>",
         "lastname" : "<Contact lastname>",
         "email" : "<Contact email>",
         "mobile" : "<Contact mobile number>",
         "facebook" : "<Contact facebook>",
         "imageUrl" : "<Contact image>"
        }
#### 5. delete http://localhost:3000/contact/:id  (*Delete a contact)
        {
         "message" : "This contact has been deleted"
         "firstname" : "<Contact firstname>"
        }

