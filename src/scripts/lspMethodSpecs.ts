// Given a cursor location, return the expected type.
const expectedType = {
  method: "textDocument/expectedType",
  description: "Returns the expected type of an incomplete expression.",
  req: "ExpectedTypeParams",
  res: "ExtectedType",
  reqInterface: [
    "export interface expectedTypeParams extends TextDocumentPositionParams,",
    "  WorkDoneProgressParams, PartialResultParams {",
    "}",
  ].join("\n"),
  resInterface: [
    "/**",
    "* The result of an ExpectedType request.",
    "*/",
    "export interface ExpectedType {",
    "  /**",
    "  * The expected type content",
    "  */",
    "  content: MarkupContent;",
    "  /**",
    "  * The expected type location",
    "  */",
    "  location: Location;",
    "}",
  ].join("\n"),
}

// Given a cursor location, find a list of relevant types.
const relevantTypes = {
  method: "textDocument/relevantTypes",
  description: "Returns a list of strings, each representing a type definition that may be relevant at a given cursor location. The returned list contains components that can be used to build up the expected type.",
  req: "RelevantTypesParams",
  res: "RelevantTypes",
  reqInterface: [
    "export interface RelevantTypesParams extends TextDocumentPositionParams,",
    "  WorkDoneProgressParams, PartialResultParams {",
    "}",
  ].join("\n"),
  resInterface: [
    "/**",
    "* The result of an RelevantTypes request.",
    "*/",
    "export interface RelevantTypes {",
    "  /**",
    "  * The list of relevant types contents",
    "  */",
    "  contents: MarkupContent[];",
    "  /**",
    "  * The list of relevant types locations",
    "  */",
    "  locations: Location[];",
    "}",
  ].join("\n"),
}

// Given a cursor location, find a list of relevant headers.
const relevantHeaders = {
  method: "textDocument/relevantHeaders",
  description: "Returns a list of strings, each representing a function header that we can call to return the expected type, or part of it, at a given cursor location.",
  req: "RelevantHeadersParams",
  res: "RelevantHeaders",
  reqInterface: [
    "export interface RelevantHeadersParams extends TextDocumentPositionParams,",
    "  WorkDoneProgressParams, PartialResultParams {",
    "}",
  ].join("\n"),
  resInterface: [
    "/**",
    "* The result of an RelevantHeaders request.",
    "*/",
    "export interface RelevantHeaders {",
    "  /**",
    "  * The list of relevant headers contents",
    "  */",
    "  contents: MarkupContent[];",
    "  /**",
    "  * The list of relevant headers locations",
    "  */",
    "  locations: Location[];",
    "}",
  ].join("\n"),
}

// Given a cursor location, request the LLM to complete the sketch.
const llmCompletion = {
  method: "textDocument/llmCompletion",
  description: "Works similarly to the previously existing completion method, but uses LLM to complete the code, akin to GitHub copilot. The result is immediately visible in the editor, and users will be able to tab through different completions.",
  req: "LLMCompletionParams",
  res: "LLMCompletion",
  reqInterface: [
    "export interface LLMCompletionParams extends TextDocumentPositionParams,",
    "  WorkDoneProgressParams, PartialResultParams {",
    "}",
  ].join("\n"),
  resInterface: [
    "/**",
    "* The result of a LLMCompletion request.",
    "*/",
    "export interface LLMCompletion {",
    "  /**",
    "  * Completed snippet",
    "  */",
    "  snippet: string;",
    "  /**",
    "  * The context returned by LLM",
    "  */",
    "  context: object;", // TODO: define an interface for LLM context
    "}",
  ].join("\n")
}

// Given an erroneous or undesired LLM completion, request the LLM to repair its solution.
// TODO: define a better spec
const llmCompletionResolveErrors = {
  method: "textDocument/llmCompletionResolveErrors",
  description: "Will attempt to resolve incorrect completions by using error rounds, iteratively fixing the generated code by replying with static errors and prompting for a corrected version.",
  req: "LLMCompletionResolveErrorsParams",
  res: "LLMCompletionResolveErrors",
  reqInterface: [
    "export interface LLMCompletionResolveErrorsParams extends TextDocumentPositionParams,",
    "  WorkDoneProgressParams, PartialResultParams {",
    "}",
  ].join("\n"),
  resInterface: [
    "/**",
    "* The result of a LLMCompletionResolveErrors request.",
    "*/",
    "export interface LLMCompletionResolveErrors {",
    "  /**",
    "  * Completed snippet",
    "  */",
    "  snippet: string;",
    "  /**",
    "  * The context returned by LLM",
    "  */",
    "  context: object;",
    "}",
  ].join("\n")
}
export {
  expectedType,
  relevantTypes,
  relevantHeaders,
  llmCompletion,
  llmCompletionResolveErrors
};
