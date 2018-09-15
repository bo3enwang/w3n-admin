/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
export default function PaletteProvider(this: any, palette, create, elementFactory, spaceTool, lassoTool) {
  this._create = create;
  this._elementFactory = elementFactory;
  this._spaceTool = spaceTool;
  this._lassoTool = lassoTool;

  palette.registerProvider(this);
}

const a = PaletteProvider as any;
a.$inject = ["palette", "create", "elementFactory", "spaceTool", "lassoTool"];

PaletteProvider.prototype.getPaletteEntries = function(element) {
  const actions = {};
  const create = this._create;
  const elementFactory = this._elementFactory;
  const spaceTool = this._spaceTool;
  const lassoTool = this._lassoTool;

  function createAction(type?: any, group?: any, className?: any, title?: any, options?: any) {
    function createListener(event) {
      const shape = elementFactory.createShape({ ...options, type });

      if (options) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }

      create.start(event, shape);
    }

    const shortType = type.replace(/^bpmn:/, "");

    return {
      group,
      className,
      title: title || "Create " + shortType,
      action: {
        dragstart: createListener,
        click: createListener
      }
    };
  }

  function createParticipant(event, collapsed) {
    create.start(event, elementFactory.createParticipantShape(collapsed));
  }

  Object.assign(actions, {
    "custom-triangle": createAction("custom:triangle", "custom", "icon-custom-triangle"),
    "custom-circle": createAction("custom:circle", "custom", "icon-custom-circle"),
    "custom-separator": {
      group: "custom",
      separator: true
    },
    "lasso-tool": {
      group: "tools",
      className: "bpmn-icon-lasso-tool",
      title: "Activate the lasso tool",
      action: {
        click: event => {
          lassoTool.activateSelection(event);
        }
      }
    },
    "space-tool": {
      group: "tools",
      className: "bpmn-icon-space-tool",
      title: "Activate the create/remove space tool",
      action: {
        click: event => {
          spaceTool.activateSelection(event);
        }
      }
    },
    "tool-separator": {
      group: "tools",
      separator: true
    },
    "create.start-event": createAction("bpmn:StartEvent", "event", "bpmn-icon-start-event-none"),
    "create.intermediate-event": createAction(
      "bpmn:IntermediateThrowEvent",
      "event",
      "bpmn-icon-intermediate-event-none"
    ),
    "create.end-event": createAction("bpmn:EndEvent", "event", "bpmn-icon-end-event-none"),
    "create.exclusive-gateway": createAction("bpmn:ExclusiveGateway", "gateway", "bpmn-icon-gateway-xor"),
    "create.task": createAction("bpmn:Task", "activity", "bpmn-icon-task"),
    "create.subprocess-expanded": createAction(
      "bpmn:SubProcess",
      "activity",
      "bpmn-icon-subprocess-expanded",
      "Create expanded SubProcess",
      { isExpanded: true }
    ),
    "create.participant-expanded": {
      group: "collaboration",
      className: "bpmn-icon-participant",
      title: "Create Pool/Participant",
      action: {
        dragstart: createParticipant,
        click: createParticipant
      }
    }
  });

  return actions;
};
