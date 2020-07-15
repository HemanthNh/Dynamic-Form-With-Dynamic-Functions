import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
      class: 'col-sm-6',
      click:`testFunction()`,
      id:"first_party_name"
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
      class: 'col-sm-6',
      id:"second_party_name"


    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
      class: 'col-sm-12',
      id:"email_id"

    },

    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this),
      class: 'col-sm-12'
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'KA',
      required: true,
      options: [
        { key: 'KA', label: 'Karnataka' },
        { key: 'TN', label: 'Tamil Nadu' },
        { key: 'MP', label: 'Madhya Pradesh' },
        { key: 'AP', label: 'Andrhra Pradesh' },
        { key: 'HP', label: 'Himachal Pradesh' }
      ],
      class: 'col-sm-4'
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'm',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ],
      class: 'col-sm-4'
    },
    {
      type: 'checkbox',
      name: 'amenities',
      label: 'Amenities',
      required: true,
      options: [
        { key: 'f', label: 'Pets' },
        { key: 'c', label: 'Furniture' },
        { key: 'd', label: 'Chimney' }
      ],
      class: 'col-sm-4'
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }
  testFunction(){
    console.log('Hellooooo')
  }
  getContent(){
    let htmlContent = document.getElementById('previewContainer').innerHTML;
    htmlContent = htmlContent.toString();
    console.log('bbbb',htmlContent)
    
htmlContent = htmlContent.replace(/<!--[\s\S]*?-->/g, "")
    // htmlContent = htmlContent.replace(/<\!--*-->/g, "");
    console.log('dddd',htmlContent)
  }
  ngDistroy() {
    this.unsubcribe();
  }
}
