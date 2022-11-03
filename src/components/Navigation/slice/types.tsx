export interface ISectionState {
  name: string;
  key: string;
  hide?: boolean;
}
export interface ISectionsState {
  currentSection: string;
  sections: ISectionState[];
}
