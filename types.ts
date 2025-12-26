
export enum PageView {
  GENERATOR = 'GENERATOR',
  TERMS = 'TERMS',
  PRIVACY = 'PRIVACY',
  CONTACT = 'CONTACT',
  ABOUT = 'ABOUT',
  DISCLAIMER = 'DISCLAIMER',
}

export interface NameSuggestion {
  name: string;
  description: string;
}
