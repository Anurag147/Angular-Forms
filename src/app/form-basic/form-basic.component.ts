import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.css']
})
export class FormBasicComponent {
    //We can also access a form using a view Child approach
    @ViewChild('form',{static: false}) signUpForm:NgForm;
    defaultQuestion:string='pet';
    answer:string='';
    genders:string[] = ['male','female'];
    user={
      username:'',
      email:'',
      secretQuestion:'',
      answer:'',
      gender:''
    };
    submitted=false;

    suggestUserName() {
      const suggestedName = 'Superuser';

      //Prepopuate form values on click of button
      //This is used when you have to update all the model properties
      /*this.signUpForm.setValue({
        userData:{
          username:suggestedName,
          email:''
        },
        secret:'pet',
        answer:'',
        gender:'male'
      });*/

      //Prepopuate form values on click of button
      //This is used when you have to update only specific model properties

      this.signUpForm.form.patchValue({
        userData:{
          username:suggestedName
        }
      });


    }

    //Below method is called when the form is submitted
    //The form object is a json object passed by HTML template

    onSubmit(){

      //Assign form values to a custom user object
      this.user.username=this.signUpForm.form.value.userData.username;
      this.user.email=this.signUpForm.form.value.userData.email;
      this.user.secretQuestion=this.signUpForm.form.value.secret;
      this.user.answer=this.signUpForm.form.value.answer;
      this.user.gender=this.signUpForm.form.value.gender;
      this.submitted=true;

      //Reset the form
      this.signUpForm.reset();
    }
}
