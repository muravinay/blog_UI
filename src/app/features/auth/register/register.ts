import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth-service';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  registerFormGroup = new FormGroup(
    {
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: passwordsMatch },
  );

  get emailFormControl() {
    return this.registerFormGroup.controls.email;
  }

  get passwordFormControl() {
    return this.registerFormGroup.controls.password;
  }

  get confirmPasswordFormControl() {
    return this.registerFormGroup.controls.confirmPassword;
  }

  onSubmit() {
    this.registerFormGroup.markAllAsTouched();
    this.errorMessage = '';
    this.successMessage = '';

    if (this.registerFormGroup.invalid || this.isSubmitting) {
      return;
    }

    const { email, password } = this.registerFormGroup.getRawValue();
    this.isSubmitting = true;

    this.authService.register(email, password).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Registration successful. Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 800);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = this.getErrorMessage(error);
      },
    });
  }

  private getErrorMessage(error: { error?: { errors?: Record<string, string[]>; title?: string } }): string {
    const errors = error.error?.errors;
    const validationMessages = errors ? Object.values(errors).flat() : [];
    return validationMessages[0] ?? error.error?.title ?? 'Registration failed. Please try again.';
  }
}
