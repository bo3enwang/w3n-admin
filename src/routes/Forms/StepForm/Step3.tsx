import React, { PureComponent } from "react";
import Result from "ant-design-pro/lib/Result";
import { Button } from "antd";

export interface IStep3Props {
  value: any;
  reset: any;
}

export class Step3 extends PureComponent<IStep3Props> {
  render() {
    const { value, reset } = this.props;
    return (
      <Result
        type="success"
        title={<div>恭喜你完成了提交</div>}
        description={
          <div>
            {value!.name} 在 {value.season} 吃 {value.fruit}
          </div>
        }
        actions={
          <div>
            <Button
              onClick={() => {
                reset();
              }}
            >
              再来一次
            </Button>
          </div>
        }
      />
    );
  }
}

export default Step3;
