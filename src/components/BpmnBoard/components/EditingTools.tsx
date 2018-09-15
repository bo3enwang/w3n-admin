import React from "react";
import { Button } from "antd";

const EditingTools = ({ onUndo, onRedo, onSave }) => {
  return (
    <div>
      <Button title="undo" onClick={onUndo}>
        撤销
      </Button>
      <Button title="redo" onClick={onRedo}>
        回撤
      </Button>
      <Button title="save" onClick={onSave}>
        保存
      </Button>
    </div>
  );
};

export default EditingTools;
