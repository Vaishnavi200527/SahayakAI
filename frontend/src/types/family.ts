export interface FamilyMember {
  id: string;
  name: string;
  role: 'Worker' | 'Homemaker' | 'Student' | 'Senior Citizen';
  age: number;
  category: 'Adult' | 'Youth' | 'Senior';
  primaryNeeds: string[];
}

export interface HouseholdInfo {
  location: string;
  annualIncome: number;
}