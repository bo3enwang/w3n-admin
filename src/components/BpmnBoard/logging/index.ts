import CoreModule from "diagram-js/lib/core";

function LoggingPluginFunc(eventBus) {
  eventBus.on("element.changed", event => {
    console.log("element ", event.element, " changed");
  });
}

// ensure the dependency names are still available after minification
const MyLoggingPlugin = LoggingPluginFunc as any;

MyLoggingPlugin.$inject = ["eventBus"];

export default {
  __depends__: [CoreModule], // {2}
  __init__: ["myLoggingPlugin"], // {3}
  myLoggingPlugin: ["type", MyLoggingPlugin] // {1}
};
