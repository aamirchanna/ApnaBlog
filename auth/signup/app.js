import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    auth,  createUserWithEmailAndPassword,
    doc,
    setDoc,
    storage,
    db,
  
  } from "../../utils/utils.js";
  const signup_btn = document.getElementById("signup_form");
  const submit_btn = document.getElementById("submit_btn");
  // const logibtn = document.getElementById("login_btn");
  
  signup_btn.addEventListener("submit", (e) =>  {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
  
    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[4].value;
    const lastName = e.target[5].value;
    const phone = e.target[6].value;
  
    const userInfo = {
      img,
      email,
      password,
      firstName,
      lastName,
      phone,
    };
  
    submit_btn.disabled = true
    submit_btn.innerHTML = "Loading..."
  
    //create account
    submit_btn.disabled = true;
    submit_btn.innerText = "Loading...";
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user=>", user.user.uid);
        // upload user image
        const userRef = ref(storage, `user/${user.user.uid}`);
  
        uploadBytes(userRef, img)
          .then(() => {
            console.log("user image uploaded");
  
            getDownloadURL(userRef)
              .then((url) => {
                console.log("url fetched=>", url);
  
                // update user info object
                userInfo.img = url;
  
                // created user document reference if first in doc 2nd time collecttion same pro
                const userDbRef = doc(db, "users", user.user.uid);
  
                setDoc(userDbRef, userInfo).then(() => {
                  console.log("User Object Updated into DB");
                  window.location.href = "/";
                  submit_btn.disabled = false;
                  submit_btn.innerText = "Submit";
                });
              })
              .catch((err) => {
                console.log("url firebase nahn de raha", err);
                submit_btn.disabled = false;
                submit_btn.innerText = "Submit";
              });
          })
          .catch(() => {
            console.log("Error in uploading user image");
            submit_btn.disabled = false;
            submit_btn.innerText = "Submit";
          });
      })
      .catch((err) => {
        alert(err), (submit_btn.disabled = false);
        submit_btn.innerText = "Submit";
      });
  
    console.log(userInfo);
  });
  