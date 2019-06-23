import { Injectable } from "@angular/core";
import { flexiConfig } from "../../assets/data";

@Injectable({
  providedIn: "root"
})
export class FormService {
  formData;
  constructor() {}
  getFormData() {
    this.formData = flexiConfig;
    return this.formData;
  }
}
