import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
})
export class AddUserComponent {
  userForm!: FormGroup;
  isSaved: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  handleSubmit() {
    // console.log(this.userForm);
    if (this.userForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.userForm.value);

      this.userService.createUser(this.userForm.value)
        .subscribe((res: any) => {
          console.log(res);
          if(res && res.id){
            this.isSaved = true;
          }
        });
    }
  }
}
