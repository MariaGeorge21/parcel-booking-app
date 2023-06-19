import { Component, ViewChild, AfterViewInit,OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
    signupForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', Validators.required]
      });
    }
  
    // Rest of your component code
  }
  
    
    
    
  
    // Rest of your component code
  
  


    // Here, you can implement the logic for user registration.
    // You can use the form data stored in the component properties (name, email, password) to register the user.
    // This could involve making an HTTP request to a backend API or using a registration service.
    // You can also add additional validation and error handling as needed.

  

