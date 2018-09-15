import React, { Component } from "react";
import { Modal } from "antd";
import DeptForm from "./DeptForm";

export class DeptEditorModal extends Component {
  render() {
    return (
      <Modal>
        <DeptForm />
      </Modal>
    );
  }
}

export default DeptEditorModal;
