import { AppData } from './types';

export const appData: AppData = {
  layers: [
    {
      level: 1,
      title: "Foundation",
      goal: "Build basic movement competency, joint health, mobility, and body awareness.",
      categories: {
        strength: ["Wall Push-Ups", "Incline Push-Ups", "Assisted Squats", "Glute Bridges", "Dead Hangs", "Bird Dogs", "Planks"],
        mobility: ["Shoulder", "Hip", "Ankle", "Thoracic spine"],
        skills: ["Proper breathing", "Core bracing", "Scapular control", "Basic body alignment"]
      },
      benchmarks: [
        { id: "b1_1", metric: "30-second plank", completed: false },
        { id: "b1_2", metric: "20 bodyweight squats", completed: false },
        { id: "b1_3", metric: "10 incline push-ups", completed: false },
        { id: "b1_4", metric: "20-second dead hang", completed: false }
      ]
    },
    {
      level: 2,
      title: "Fundamental Strength",
      goal: "Develop the primary movement patterns.",
      categories: {
        push: ["Push-Ups", "Diamond Push-Ups"],
        pull: ["Australian Rows", "Band-Assisted Pull-Ups"],
        legs: ["Bodyweight Squats", "Reverse Lunges", "Step-Ups"],
        core: ["Hollow Hold", "Leg Raises", "Side Planks"]
      },
      benchmarks: [
        { id: "b2_1", metric: "20 Push-Ups", completed: false },
        { id: "b2_2", metric: "10 Rows", completed: false },
        { id: "b2_3", metric: "5 Pull-Ups", completed: false },
        { id: "b2_4", metric: "50 Squats", completed: false },
        { id: "b2_5", metric: "30-second Hollow Hold", completed: false }
      ]
    },
    {
      level: 3,
      title: "Advanced Fundamentals",
      goal: "Master bodyweight control and introduce isolated core tension.",
      categories: {
        push: ["Dips", "Archer Push-Ups"],
        pull: ["Pull-Ups", "Chin-Ups", "Active Hangs"],
        legs: ["Pistol Squat Progressions", "Shrimp Squats"],
        core: ["L-Sit Progressions", "Dragon Flag Negatives"]
      },
      benchmarks: [
        { id: "b3_1", metric: "15 Dips", completed: false },
        { id: "b3_2", metric: "12 Pull-Ups", completed: false },
        { id: "b3_3", metric: "10 Pistol Squats (each leg)", completed: false },
        { id: "b3_4", metric: "15-second L-Sit", completed: false }
      ]
    },
    {
      level: 4,
      title: "Introduction to Levers",
      goal: "Begin exploring straight-arm strength and intermediate skills.",
      categories: {
        push: ["Handstand Push-Up Negatives", "Pseudo Planche Push-Ups"],
        pull: ["Front Lever Tucks", "Back Lever Tucks", "Muscle-Up Transitions"],
        legs: ["Weighted Pistol Squats", "Nordic Curls"],
        core: ["Dragon Flags", "Advanced L-Sits"]
      },
      benchmarks: [
        { id: "b4_1", metric: "3 Free Handstand Push-Ups", completed: false },
        { id: "b4_2", metric: "20-second Front Lever Tuck", completed: false },
        { id: "b4_3", metric: "5 Muscle-Up Negatives", completed: false }
      ]
    },
    {
      level: 5,
      title: "Advanced Skills",
      goal: "Achieve iconic calisthenics skills and dynamic movements.",
      categories: {
        push: ["Straddle Planche", "Freestanding HSPU"],
        pull: ["Front Lever", "One Arm Pull-Up Negatives", "Bar Muscle-Ups"],
        legs: ["Advanced Nordic Curls", "Explosive Bounds"],
        core: ["Human Flag Progressions", "V-Sits"]
      },
      benchmarks: [
        { id: "b5_1", metric: "5-second Straddle Planche", completed: false },
        { id: "b5_2", metric: "5-second Front Lever", completed: false },
        { id: "b5_3", metric: "5 Bar Muscle-Ups", completed: false },
        { id: "b5_4", metric: "10-second Human Flag", completed: false }
      ]
    },
    {
      level: 6,
      title: "Mastery",
      goal: "Refine elite static holds and complex combinations.",
      categories: {
        push: ["Full Planche", "90 Degree Push-Ups"],
        pull: ["One Arm Pull-Up", "Victorian Cross"],
        legs: ["One Arm Pistol Squat", "Plyo Lunges"],
        core: ["Manna", "Full Human Flag"]
      },
      benchmarks: [
        { id: "b6_1", metric: "5-second Full Planche", completed: false },
        { id: "b6_2", metric: "1 One Arm Pull-Up (each arm)", completed: false },
        { id: "b6_3", metric: "3 90 Degree Push-Ups", completed: false }
      ]
    },
    {
      level: 7,
      title: "Gravity Defiance",
      goal: "The absolute pinnacle of bodyweight control and strength.",
      categories: {
        push: ["Planche Push-Ups", "Maltese"],
        pull: ["One Arm Front Lever", "Iron Cross"],
        legs: ["Elite Power Endurance"],
        core: ["Manna Mastery"]
      },
      benchmarks: [
        { id: "b7_1", metric: "5 Planche Push-Ups", completed: false },
        { id: "b7_2", metric: "3-second Maltese", completed: false },
        { id: "b7_3", metric: "3-second Iron Cross", completed: false }
      ]
    }
  ],
  pillars: [
    {
      name: "Strength",
      progression: ["Basic", "Push/Pull Patterns", "Relative Strength", "Advanced", "Maximal"]
    },
    {
      name: "Mobility",
      progression: ["Joint Health", "Passive Flexibility", "Active Range", "Loaded Mobility", "Dynamic"]
    },
    {
      name: "Balance",
      progression: ["Base Coordination", "Inversions Intro", "Handstands", "One-Arm Balances", "Elite Static"]
    },
    {
      name: "Skill",
      progression: ["Body Awareness", "Good Alignment", "Lever Skills", "Expert Dynamics", "Planche/OAP/Human Flag"]
    },
    {
      name: "Endurance",
      progression: ["Core Stamina", "Rep Volumes", "Circuit Sets", "Combo Flows", "Extreme Durability"]
    }
  ]
};
