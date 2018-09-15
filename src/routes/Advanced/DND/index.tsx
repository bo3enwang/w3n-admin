import React, { Component } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import styled from "styled-components";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const StyledDND = styled.div`
  .dnd-item {
    width: 214px;
    height: 310px;
    position: absolute;
    touch-action: none;
    transform: translate(904px, 10px);
    background: #ccc;
    border: 1px solid black;
  }
  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }
`;

export class DND extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4].map((i, key, list) => {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === list.length - 1
        };
      }),
      newCounter: 0
    };
  }
  createElement = el => {
    const i = el.add ? "+" : el.i;
    return (
      <div className="dnd-item" key={i} data-grid={el}>
        {el.add ? (
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span
          className="remove"
          style={{
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
          }}
          onClick={() => {
            this.onRemoveItem(i);
          }}
        >
          x
        </span>
      </div>
    );
  };

  onAddItem = () => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  };

  onBreakpointChange = (breakpoint, cols) => {
    this.setState({
      breakpoint,
      cols
    });
  };

  onLayoutChange = layout => {
    // this.props.onLayoutChange(layout);
    this.setState({ layout });
  };

  onRemoveItem = i => {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i }) });
  };

  render() {
    return (
      <StyledDND>
        <button onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {this.state.items.map(el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </StyledDND>
    );
  }
}

export default DND;
