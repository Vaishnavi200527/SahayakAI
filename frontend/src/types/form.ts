export type RoleType = 'Worker' | 'Homemaker' | 'Student' | 'Senior Citizen' | 'Child' | 'Differently Abled';

export interface NewMember {
  role: RoleType | null;
  fullName: string;
  age: string;
  gender: 'Male' | 'Female' | null;
  primaryNeeds: string[];
}