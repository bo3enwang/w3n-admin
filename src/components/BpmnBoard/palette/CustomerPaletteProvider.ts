/**
 * A provider for quick service task production
 */
function CustomerPaletteProviderFunc(this: any, palette, create, elementFactory) {
  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

const CustomerPaletteProvider = CustomerPaletteProviderFunc as any;

CustomerPaletteProvider.$inject = ["palette", "create", "elementFactory"];

CustomerPaletteProvider.prototype.getPaletteEntries = function() {
  const elementFactory = this._elementFactory;
  const create = this._create;

  function startCreate(event) {
    const serviceTaskShape = elementFactory.create("shape", { type: "bpmn:ServiceTask" });
    create.start(event, serviceTaskShape);
  }

  return {
    "create-service-task": {
      group: "activity",
      title: "Create a new nyan CAT!",
      action: {
        dragstart: startCreate,
        click: startCreate
      }
    }
  };
};

export default CustomerPaletteProvider;
