export default {
  schema: {
    title: "A market form",
    description: "A market form retrieving from Node Red.",
    type: "object",
    required: ["baseToken", "quoteToken"],
    properties: {
      baseToken: {
        type: "string",
        title: "Base token",
      },
      quoteToken: {
        type: "string",
        title: "Quote token",
      },
      baseTokenAddress: {
        type: "string",
        title: "Base token address",
      },
      quoteTokenAddress: {
        type: "string",
        title: "Quote token address",
      },
      supportedOrderTypes: {
        title: "Select market",
        type: "string",
        enum: ["limit", "market"],
      },
    },
  },
  uiSchema: {
    baseToken: {
      "ui:autofocus": true,
      "ui:placeholder": "Enter base token",
    },
    quoteToken: {
      "ui:autofocus": true,
      "ui:placeholder": "Enter quote token",
    },
    supportedOrderTypes: {
      "ui:widget": "radio",
    },
  },
  formData: {},
};
