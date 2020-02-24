import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {
    //We can also access a form using a view Child approach
    @ViewChild('form',{static: false}) signUpForm:NgForm;
    defaultSubscription:string='Advanced';
    user={
      email:'',
      subscription:''
    };
    submitted=false;

    //Below method is called when the form is submitted
    //The form object is a json object passed by HTML template

    onSubmit(){

      //Assign form values to a custom user object
      this.user.email=this.signUpForm.form.value.email;
      this.user.subscription=this.signUpForm.form.value.subscription;
      this.submitted=true;

      //Reset the form
      this.signUpForm.reset();
    }
}
