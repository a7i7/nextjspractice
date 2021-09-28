export const ENABLE_DOCUMENTATION: string = "enable_documentation";
export const ENABLE_DEPLOYMENT: string = "enable_deployment";
export const ENABLE_EXAMPLES: string = "enable_examples";
export const ENABLE_LEARNING: string = "enable_learning";

export const PREDICATES_MAP: { [name: string]: any } = {
  [ENABLE_DOCUMENTATION]: () => process.env.NODE_ENV == "development",
  [ENABLE_DEPLOYMENT]: () => process.env.NODE_ENV == "production",
  [ENABLE_EXAMPLES]: () => process.env.NODE_ENV == "development",
  [ENABLE_LEARNING]: () => process.env.NODE_ENV == "development",
};
