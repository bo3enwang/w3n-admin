import React, { Component } from "react";
import { Form } from "antd";
import { FormComponentProps } from "antd/lib/form";

export interface IDeptFormProps extends FormComponentProps {
  deptValues?: any;
}

export class DeptForm extends Component<IDeptFormProps> {
  render() {
    return <div>Form</div>;
  }
}

export default Form.create()(DeptForm);
