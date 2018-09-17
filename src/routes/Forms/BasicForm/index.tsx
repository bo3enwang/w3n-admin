import React, { Component } from "react";
import { observable } from "mobx";
import {
  Form,
  Card,
  Icon,
  Radio,
  Input,
  InputNumber,
  Mention,
  Rate,
  Select,
  Switch,
  Slider,
  DatePicker,
  Cascader,
  TreeSelect,
  Button,
  message
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { observer } from "mobx-react";
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const TreeNode = TreeSelect.TreeNode;

@observer
export class Basic extends Component<FormComponentProps> {
  @observable
  formLayout: "horizontal" | "inline" | "vertical" | undefined = "horizontal";

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.info("提交表单成功!");
        console.log("Received values of form: ", values);
      }
    });
  };

  changeLayout = e => {
    this.formLayout = e.target.value;
  };

  render() {
    const formItemLayout =
      this.formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
    const buttonItemLayout =
      this.formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;

    const options: any = [];
    for (let i = 10; i < 36; i++) {
      options.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const cascaderOptions = [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hanzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake"
              }
            ]
          }
        ]
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men"
              }
            ]
          }
        ]
      }
    ];

    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <Form layout={this.formLayout} onSubmit={this.handleSubmit}>
          <FormItem label="表单布局模式" {...formItemLayout}>
            <RadioGroup onChange={this.changeLayout} value={this.formLayout}>
              <RadioButton value="horizontal">Horizontal</RadioButton>
              <RadioButton value="vertical">Vertical</RadioButton>
            </RadioGroup>
          </FormItem>
          <FormItem label="字符输入" {...formItemLayout}>
            {getFieldDecorator("string", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Input placeholder="input placeholder" />)}
          </FormItem>
          <FormItem label="数字输入" {...formItemLayout}>
            {getFieldDecorator("number", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<InputNumber min={1} max={10} />)}
          </FormItem>
          <FormItem label="提及(@)" {...formItemLayout}>
            {getFieldDecorator("mention", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(
              <Mention
                style={{ width: "100%", height: 100 }}
                suggestions={["afc163", "benjycui", "yiminghe", "jljsj33", "dqaria", "RaoHai"]}
                multiLines={true}
              />
            )}
          </FormItem>
          <FormItem label="单选" {...formItemLayout}>
            {getFieldDecorator("radio", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(
              <RadioGroup>
                <RadioButton value="IronMan">钢铁侠</RadioButton>
                <RadioButton value="Hulk">绿巨人</RadioButton>
                <RadioButton value="CaptainAmerica">美国队长</RadioButton>
                <RadioButton value="DoctorStrange">奇异博士</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label="评分" {...formItemLayout}>
            {getFieldDecorator("rate", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Rate character={<Icon type="heart" />} />)}
          </FormItem>
          <FormItem label="下拉选择" {...formItemLayout}>
            {getFieldDecorator("select", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(
              <Select mode="multiple" style={{ width: "100%" }} placeholder="Please select">
                {options}
              </Select>
            )}
          </FormItem>
          <FormItem label="开关" {...formItemLayout}>
            {getFieldDecorator("switch", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Switch />)}
          </FormItem>
          <FormItem label="滑动条" {...formItemLayout}>
            {getFieldDecorator("slider", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Slider range={true} />)}
          </FormItem>
          <FormItem label="日期选择" {...formItemLayout}>
            {getFieldDecorator("rangeDate", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<RangePicker />)}
          </FormItem>
          <FormItem label="级联选择" {...formItemLayout}>
            {getFieldDecorator("cascader", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Cascader options={cascaderOptions} changeOnSelect={true} />)}
          </FormItem>
          <FormItem label="树选择" {...formItemLayout}>
            {getFieldDecorator("treeSelect", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(
              <TreeSelect
                showSearch={true}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Please select"
                allowClear={true}
                treeDefaultExpandAll={true}
              >
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    <TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    <TreeNode value="sss" title={<b style={{ color: "#08c" }}>sss</b>} key="random3" />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            )}
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(Basic);
