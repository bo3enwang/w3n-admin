import React, { PureComponent, Fragment } from "react";
import { Form, Input, Button, Radio } from "antd";
import { FormComponentProps } from "antd/lib/form";

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export interface IStep1FormProps extends FormComponentProps {
  onSubmit: any;
}

export class Step1Form extends PureComponent<IStep1FormProps> {
  onValidateForm = () => {
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    };

    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form>
          <FormItem label="昵称" {...formItemLayout}>
            {getFieldDecorator("name", {
              initialValue: "付小春",
              rules: [{ required: true, min: 2, max: 8, message: "请输入2~8位昵称!" }]
            })(<Input placeholder="请输入2~8位昵称!" />)}
          </FormItem>
          <FormItem label="爱好" {...formItemLayout}>
            {getFieldDecorator("fruit", {
              initialValue: "西瓜",
              rules: [{ required: true, message: "请选择你喜欢的水果!" }]
            })(
              <RadioGroup>
                <RadioButton value="苹果">苹果</RadioButton>
                <RadioButton value="芒果">芒果</RadioButton>
                <RadioButton value="葡萄">葡萄</RadioButton>
                <RadioButton value="西瓜">西瓜</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
        </Form>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span
            }
          }}
          label=""
        >
          <Button type="primary" onClick={this.onValidateForm}>
            下一步
          </Button>
        </Form.Item>
      </Fragment>
    );
  }
}

export default Form.create()(Step1Form);
