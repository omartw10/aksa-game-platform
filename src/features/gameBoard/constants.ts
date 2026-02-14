export const QUESTION_VALUES = [200, 400, 600, 800, 1000] as const;
export type QuestionValue = (typeof QUESTION_VALUES)[number];
