import React, { Component } from "react";
import { Card, Spin, Steps } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";
import { observable } from "mobx";

import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3 from "./Step3";

import service from "utils/request";

const StyedStepForm = styled.div`
  margin: 40px auto;
  @media (min-width: 992px) {
    max-width: 580px;
  }
  @media (min-width: 1200px) {
    max-width: 780px;
  }
`;

const Step = Steps.Step;

@observer
export class StepForm extends Component {
  @observable
  step = 0;
  @observable
  loading = false;

  @observable.shallow
  value: any;

  reset = () => {
    this.step = 0;
    this.value = {};
  };

  perviousStep = () => {
    this.step = this.step - 1;
  };

  onSubmit = value => {
    this.value = { ...this.value, ...value };
    if (this.step === 1) {
      this.loading = true;
      service
        .post("/form/step")
        .then(({ status }) => {
          console.log(status);
          this.loading = false;
          this.step = this.step + 1;
        })
        .catch(e => {
          this.loading = false;
        });
    } else {
      this.step = this.step + 1;
    }

    console.log(value);
  };

  currentForm = () => {
    switch (this.step) {
      case 0:
        return <Step1Form onSubmit={this.onSubmit} />;
      case 1:
        return <Step2Form onSubmit={this.onSubmit} rollBack={this.perviousStep} />;
      case 2:
        return <Step3 value={this.value} reset={this.reset} />;
    }
    return <div>Error</div>;
  };

  render() {
    return (
      <Card>
        <StyedStepForm>
          <Steps current={this.step}>
            <Step title="基本信息" description="填写一些基础资料" />
            <Step title="确认一下" description="确认一下，是么？" />
            <Step title="结果" description="可以的吧~" />
          </Steps>
        </StyedStepForm>
        <Spin spinning={this.loading}>{this.currentForm()}</Spin>
      </Card>
    );
  }
}

export default StepForm;
