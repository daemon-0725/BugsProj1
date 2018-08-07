import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {

  constructor(private http: Http) {
  }

  url: string = ""; 

  addtoDB (alpha: HTMLInputElement, numero: HTMLInputElement) {
    console.log(alpha.value,numero.value);
    let post = {
      text : alpha.value,
      num : numero.value
    }
    this.http.post(this.url,JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response.json().id;
        });
  }

  form = new FormGroup({
    alpha : new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    numero : new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  });

  get alpha() {
    return this.form.get('alpha')
  }

}
