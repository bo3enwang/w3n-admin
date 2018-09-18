import React, { PureComponent, Fragment } from "react";
import { Form, Radio, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export interface IStep2FormProps extends FormComponentProps {
  rollBack: any;
  onSubmit: any;
}

export class Step2Form extends PureComponent<IStep2FormProps> {
  onValidateForm = () => {
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };
  render() {
    const { rollBack } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form layout="inline" style={{ textAlign: "center" }}>
          <FormItem label="现在是什么季节？">
            {getFieldDecorator("season", {
              initialValue: "夏天",
              rules: [{ required: true, message: "Please input your note!" }]
            })(
              <RadioGroup>
                <RadioButton value="春天">春天</RadioButton>
                <RadioButton value="夏天">夏天</RadioButton>
                <RadioButton value="秋天">秋天</RadioButton>
                <RadioButton value="冬天">冬天</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <div style={{ margin: "10px 0" }}>
            <Form.Item label="">
              <Button type="primary" onClick={this.onValidateForm}>
                提交
              </Button>
              <Button
                style={{ marginLeft: 15 }}
                onClick={() => {
                  rollBack();
                }}
              >
                上一步
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default Form.create()(Step2Form);
