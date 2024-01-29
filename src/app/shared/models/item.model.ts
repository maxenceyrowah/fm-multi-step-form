export interface ISteps {
  order: number;
  title: string;
  description: string;
  active: boolean;
}

export const STEPS: ISteps[] = [
  {
    order: 1,
    title: 'STEP 1',
    description: 'YOUR INFO',
    active: true,
  },
  {
    order: 2,
    title: 'STEP 2',
    description: 'SELECT PLAN',
    active: false,
  },
  {
    order: 3,
    title: 'STEP 3',
    description: 'ADD-ONS',
    active: false,
  },
  {
    order: 4,
    title: 'STEP 4',
    description: 'SUMMARY',
    active: false,
  },
];
