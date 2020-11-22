import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact_form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.contact_form_init();
  }

  on_submit() {
    console.log(this.contact_form.value);
  }

  contact_form_init() {
    this.contact_form = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }
}
