const firebaseConfig = {
    apiKey: "AIzaSyBoWpazV71GbFqUAt1x3qTsIjWIUXIuhQ4",
    authDomain: "contactus-c2371.firebaseapp.com",
    databaseURL: "https://contactus-c2371-default-rtdb.firebaseio.com",
    projectId: "contactus-c2371",
    storageBucket: "contactus-c2371.appspot.com",
    messagingSenderId: "440363647149",
    appId: "1:440363647149:web:56019fe889bb47b0284624"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
