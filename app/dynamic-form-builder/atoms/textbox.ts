import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'textbox',
    template: `
      <div [formGroup]="form">
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control" [(ngModel)]="field.value" (keyup)="testFunction(field.id)"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
      </div> 
      <div>{{names}}</div>
    `
})
export class TextBoxComponent implements OnInit{
  functionString: string = ''
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
    constructor() {
this.initFn()

    }
      ngOnInit(){
  
  }
  initFn(){

var sfunctionString = "(function testFunction(name) { return name + 1; })";
var x = eval(sfunctionString);
console.log(x("bob")); // logs "bob1"
  }
  testFunction(variable){
    console.log('variable',variable)
    document.getElementById(variable).innerText = this.field.value
    console.log('this.field.value',this.field.value)
  }
//       testFunction(){
//     console.log('Hellooooo')
// //     this.createVariables({
// //     'aa':'name'
// // });
//     console.log('namess-sss-->',this.names)

//   }


//   createVariables(variables) {

//     // for (var varName in variables) {
//     //     window[varName ] = variables[varName ];
//     // }
//     // for (var i = 0; i < coords.length; ++i) {
//     this["name"];
// // }
// }

// ngOnInit(){
//   this.createVariables('name')
//    var k = 'value'; 
//     var i = 0; 
//     for(i = 1; i < 5; i++) { 
//         eval('var ' + k + i + '= ' + i + ';'); 
//     } 
//     var coords = ['a','b','c']
//     for (var i = 0; i < coords.length; ++i) {
//    this["name"] = "";
// }
// console.log('name',this.names)
//     // console.log("value1=" + value1); 
//     // console.log("value2=" + value2); 
//     // console.log("value3=" + value3); 
//     // console.log("value4=" + value4); 
// }

}