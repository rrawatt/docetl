export type File = {
  name: string;
  path: string;
};

export type Operation = {
  id: string;
  llmType: "LLM" | "non-LLM";
  type:
    | "map"
    | "reduce"
    | "filter"
    | "resolve"
    | "parallel_map"
    | "unnest"
    | "split"
    | "gather"
    | "sample"
    | "code_map"
    | "code_reduce"
    | "code_filter";
  name: string;
  prompt?: string;
  output?: { schema: SchemaItem[] };
  validate?: string[];
  gleaning?: { num_rounds: number; validation_prompt: string };
  otherKwargs?: Record<string, any>;
  runIndex?: number;
  sample?: number;
  shouldOptimizeResult?: string;
};

export type OutputRow = Record<string, string>;

export type SchemaType =
  | "string"
  | "float"
  | "int"
  | "boolean"
  | "list"
  | "dict";

export interface SchemaItem {
  key: string;
  type: SchemaType;
  subType?: SchemaItem | SchemaItem[];
}

export interface UserNote {
  id: string;
  note: string;
}

export interface Bookmark {
  id: string;
  text: string;
  source: string;
  color: string;
  notes: UserNote[];
}

export interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (
    text: string,
    source: string,
    color: string,
    notes: UserNote[]
  ) => void;
  removeBookmark: (id: string) => void;
}

export interface OutputType {
  path: string;
  operationId: string;
  inputPath?: string;
}

export interface OptimizeRequest {
  yaml_config: string;
  step_name: string;
  op_name: string;
}

export type TaskStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled";

export interface OptimizeResult {
  task_id: string;
  status: TaskStatus;
  should_optimize?: string;
  cost?: number;
  error?: string;
  created_at: string;
  completed_at?: string;
}
