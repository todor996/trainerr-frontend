import {
  Exercise,
  Training,
  TrainingPlan,
} from '@modules/trainer-pov/modules/training/store/slice.store';

//#region Mock Data Utils

// Helper function to generate mock exercise data
function generateExercise(id: number): Exercise {
  return {
    id,
    name: `Exercise ${id} - ${Math.floor(Math.random() * 100) + 1}`,
    description: `Description for Exercise ${id}`,
    media: [],
    units: [],
  };
}

// Helper function to generate mock training data
function generateTraining(id: number): Training {
  return {
    id,
    name: `Training ${id}`,
    description: `Description for Training ${id}`,
    exercise: [...generateList(3, generateExercise)], // Generate a single exercise for each training for demonstration
  };
}

function generateList<T>(length: number, generator: (id: number) => T): T[] {
  const list: T[] = [];
  for (let i = 1; i <= length; i++) {
    list.push(generator(i));
  }
  return list;
}

//#endregion Mock Data Utils

export const trainingPlansMock: TrainingPlan[] = [
  {
    id: 1,
    name: 'Beginner',
    description: 'For beginners',
    trainings: [...generateList<Training>(5, generateTraining)],
  },
  {
    id: 2,
    name: 'Intermediate',
    description: 'For intermediate',
    trainings: [
      {
        id: 1,
        name: 'Training 1',
        description: 'Description for Training 1',
        exercise: [
          {
            id: 1,
            name: 'Exercise 1',
            description: 'Description for Exercise 1',
            media: [],
            units: [
              { type: 'distance', value: 1, unit: 'km' },
              { type: 'time', value: 2, unit: 'time' },
              { type: 'reps', value: 3, unit: 'reps' },
              { type: 'weight', value: 4, unit: 'kg' },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Training 2',
        description: 'Description for Training 2',
        exercise: [
          {
            id: 2,
            name: 'Exercise 2',
            description: 'Description for Exercise 2',
            media: [],
            units: [
              { type: 'distance', value: 1, unit: 'km' },
              { type: 'reps', value: 3, unit: 'reps' },
            ],
          },
          {
            id: 3,
            name: 'Exercise 3',
            description: 'Description for Exercise 3',
            media: [],
            units: [
              { type: 'time', value: 2, unit: 'time' },
              { type: 'weight', value: 4, unit: 'kg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Advanced',
    description: 'For advanced',
    trainings: [
      {
        id: 1,
        name: 'Training 1',
        description: 'Description for Training 1',
        exercise: [
          {
            id: 1,
            name: 'Exercise 1',
            description: 'Description for Exercise 1',
            media: [],
            units: [
              { type: 'distance', value: 1, unit: 'km' },
              { type: 'time', value: 2, unit: 'time' },
              { type: 'reps', value: 3, unit: 'reps' },
              { type: 'weight', value: 4, unit: 'kg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Beginner',
    description: 'For beginners',
    trainings: [],
  },
];
