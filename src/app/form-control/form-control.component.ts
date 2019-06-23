import { Component, OnInit } from "@angular/core";
import { FormService } from "../services/form.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styleUrls: ["./form-control.component.scss"]
})
export class FormControlComponent implements OnInit {
  formData;
  submittedFormData = [];
  constructor(private formService: FormService) {}
  ngOnInit() {
    this.formData = this.formService.getFormData().items;

    // console.log(Object.values(this.formData));
  }
  submitForm(data) {
    this.submittedFormData = [];
    this.submittedFormData.push(data.value);
    console.log(this.submittedFormData);
    data.resetForm();
  }
}
