import React, { Component } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
// import BpmnViewer from "bpmn-js";
import pizzaDiagram from "./xmlStr";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
// import "bpmn-js-properties-panel/styles/properties.less";

import ZoomControls from "./components/ZoomControls";
import EditingTools from "./components/EditingTools";

import { Drawer, Button } from "antd";

import customTranslate from "./i18n/customTranslate";

// import debounce from "lodash/debounce";

// import MyLoggingModule from "./logging";

// import CustomModule from "./custom";

import styled from "styled-components";

const StyledBpmnBoard = styled.div`
  .djs-palette {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .highlight-overlay {
    background-color: green; /* color elements as green */
    opacity: 0.4;
    pointer-events: none; /* no pointer events, allows clicking through onto the element */
  }
`;

export class BpmnBoard extends Component {
  scale = 1;
  bpmnModeler;

  state = {
    href: "",
    visible: false
  };

  svgData;
  componentDidMount() {
    const customTranslateModule = {
      translate: ["value", customTranslate]
    };
    document.body.className = "shown";
    this.bpmnModeler = new BpmnModeler({
      container: "#canvas",
      additionalModules: [customTranslateModule]
    });

    this.bpmnModeler.importXML(pizzaDiagram, err => {
      if (err) {
        // import failed :-(
        console.log("error rendering", err);
      } else {
        // we did well!
        this.bpmnModeler.getDefinitions();
        this.bpmnModeler.get("canvas").zoom("fit-viewport");
        this.serialize();
      }
    });

    this.bpmnModeler.on("element.click", event => {
      const element = event.element;
      const businessObject = element.businessObject;
      console.log(businessObject);
      this.setState({ visible: true });
      // const moddle = this.bpmnModeler.get("moddle");
      // the underlaying BPMN 2.0 element
      // const elementRegistry = this.bpmnModeler.get("elementRegistry");
      // // do not allow on root element
      // if (!element.parent) {
      //   return;
      // }
      // // console.log(moddle);
      // console.log(businessObject);
      // console.log(element);
    });

    // const exportArtifacts = debounce(() => {
    //   this.saveSVG((err, svg) => {
    //     if (!err) {
    //       this.svgData = svg;
    //     }
    //   });
    // }, 500);

    this.bpmnModeler.on("commandStack.changed", this.serialize);
  }

  serialize = () => {
    this.bpmnModeler.saveXML((err, xml) => {
      const encodedData = err ? "" : encodeURIComponent(xml);
      this.setState({
        href: encodedData ? "data:application/bpmn20-xml;charset=UTF-8," + encodedData : ""
      });
      if (err) {
        console.log("failed to serialize BPMN 2.0 xml", err);
      }
    });
  };

  saveSVG = done => {
    this.bpmnModeler.saveSVG(done);
  };

  downloadSvg = () => {
    console.log(this.svgData);
  };

  setEncoded = (link, name, data) => {
    const encodedData = encodeURIComponent(data);

    if (data) {
      link.addClass("active").attr({
        href: "data:application/bpmn20-xml;charset=UTF-8," + encodedData,
        download: name
      });
    } else {
      link.removeClass("active");
    }
  };

  handleZoom = () => {
    this.bpmnModeler.get("canvas").zoom(this.scale);
  };

  handleZoomIn = () => {
    this.scale += 0.1;
    this.handleZoom();
  };

  handleZoomOut = () => {
    if (this.scale <= 0.3) {
      this.scale = 0.2;
    } else {
      this.scale -= 0.1;
    }
    this.handleZoom();
  };

  handleZoomReset = () => {
    this.scale = 1;
    this.handleZoom();
  };

  handleSave = e => {
    this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
      console.log(xml);
      console.log(this.bpmnModeler.getDefinitions());
    });
  };

  handleRedo = () => {
    this.bpmnModeler.get("commandStack").redo();
  };

  handleUndo = () => {
    this.bpmnModeler.get("commandStack").undo();
  };

  hideDrawer = () => {
    this.setState({ visible: false });
  };

  updateElement = element => {
    console.log("zzz");
    const modeling = this.bpmnModeler.get("modeling");
    modeling.updateProperties(element, {
      magic: "test"
    });
  };

  render() {
    return (
      <StyledBpmnBoard>
        <div className="content">
          <div id="canvas" style={{ height: 500 }} />
          <div id="js-properties-panel" />
        </div>
        <ZoomControls
          onZoomIn={this.handleZoomIn}
          onZoomOut={this.handleZoomOut}
          onZoomReset={this.handleZoomReset}
        />
        <EditingTools onSave={this.handleSave} onRedo={this.handleRedo} onUndo={this.handleUndo} />

        <div>
          <Button onClick={this.downloadSvg}>保存SVG</Button>
          <a href={this.state.href} onClick={this.downloadSvg}>
            下载
          </a>
        </div>
        <Drawer visible={this.state.visible} onClose={this.hideDrawer}>
          Info
        </Drawer>
      </StyledBpmnBoard>
    );
  }
}

export default BpmnBoard;
