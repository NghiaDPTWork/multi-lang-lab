export interface Ritual {
  id: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  deletedAt: null;
  name: string;
  timeOfExecution?: string;
  dateLunar: string;
  dateSolar: string;
  difficultyLevel: "dễ" | "khó" | "trung bình" | "rất khó";
  description: string;
  content: string;
  reference: string;
  isHot: boolean;
  ritualCategoryId: string;
  ritualMedias?: [];
  ritualTags?: [];
}
