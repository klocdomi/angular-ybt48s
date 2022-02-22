import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactForm } from '../contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = {
    name: "",
    email: "",
    type: "Message type",
    accepted: true,
    message: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(`is valid form? : ${form.valid}`);
  }

}
