import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "antd";

const StyledFixHeightCard = styled.div`
  .ant-card {
    height: calc(100vh - 155px);
  }
  .real-body {
    overflow: auto;
    padding: 17px;
  }
`;

export interface IFixHeightCardProps {
  title?: React.ReactNode;
}

export class FixHeightCard extends Component<IFixHeightCardProps, any> {
  contentRef;
  state = {
    cardHeight: 0,
    bodyHeight: 0
  };
  componentDidMount = () => {
    this.resize();
    window.addEventListener("resize", this.resize);
  };

  resize = () => {
    const { title } = this.props;
    const elHeight = document.getElementById("content")!.clientHeight as number;
    const cardHeight = elHeight - 30;
    let bodyHeight = cardHeight;
    if (title) {
      bodyHeight = cardHeight - 58;
    }
    this.setState({ cardHeight, bodyHeight });
  };

  render() {
    return (
      <StyledFixHeightCard
        id="fixCard"
        ref={ref => {
          this.contentRef = ref;
        }}
      >
        <Card title={this.props.title} style={{ height: this.state.cardHeight }} bodyStyle={{ padding: 0 }}>
          <div className="real-body" style={{ height: this.state.bodyHeight }}>
            {this.props.children}
          </div>
        </Card>
      </StyledFixHeightCard>
    );
  }
}

export default FixHeightCard;
