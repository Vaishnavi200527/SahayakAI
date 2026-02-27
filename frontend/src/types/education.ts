export interface ExamAlert {
  id: string;
  title: string;
  category: string;
  date: string;
  daysLeft: number;
  status?: 'Urgent' | 'Normal';
}

export interface Scholarship {
  id: string;
  title: string;
  amount: string;
  eligibility: string;
  deadline: string;
  alert?: string;
}