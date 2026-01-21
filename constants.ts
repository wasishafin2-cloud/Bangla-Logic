
import { Fallacy, Category, Scenario } from './types';

export const FALLACIES: Fallacy[] = [
  {
    id: 'ad-hominem',
    name: 'Ad Hominem',
    banglaName: 'ব্যক্তি আক্রমণ (Byakti Akromon)',
    description: 'Attacking the person making the argument instead of the argument itself.',
    example: '"You are too young to understand politics, go study first."',
    rebuttal: 'Focus on the facts I presented, not my age.'
  },
  {
    id: 'strawman',
    name: 'Strawman',
    banglaName: 'খড়কুটোর মানুষ (Strawman)',
    description: 'Misrepresenting someone\'s argument to make it easier to attack.',
    example: '"You want freedom of speech? So you want people to insult our culture and religion?"',
    rebuttal: 'I never said that. Freedom of speech is about accountability, not insults.'
  },
  {
    id: 'slippery-slope',
    name: 'Slippery Slope',
    banglaName: 'পিচ্ছিল ঢাল (Picchil Dhal)',
    description: 'Asserting that a relatively small first step will inevitably lead to a chain of related (typically negative) events.',
    example: '"If we let our daughter go to a concert once, next she will start taking drugs and forget her family."',
    rebuttal: 'Going to a concert is a singular event; there is no evidence it leads to drug abuse.'
  },
  {
    id: 'appeal-to-authority',
    name: 'Appeal to Authority',
    banglaName: 'কর্তৃত্বের দোহাই (Kortrittobader Dohai)',
    description: 'Claiming something is true just because an authority figure (or elder) said it.',
    example: '"Our ancestors did this for 100 years, so it must be the only right way."',
    rebuttal: 'Tradition is not a proof of logic. Times change, and so does our understanding.'
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    category: Category.FAMILY,
    title: 'The Career Choice Drama',
    context: 'You told your parents you want to be a digital artist instead of a BCS cadre.',
    argument: '"Amader kuler keu kokhono chobi eke bhat khay ni. Tumi ki amader mukh porabe?"',
    options: [
      {
        text: 'Argue that you love art.',
        isLogical: false,
        feedback: 'This is an emotional response, not a logical one addressing their concern.'
      },
      {
        text: 'Explain the market size of global digital art and freelance economy.',
        isLogical: true,
        feedback: 'Perfect! Use data to counter the "tradition" fallacy.'
      }
    ]
  },
  {
    id: 2,
    category: Category.SOCIAL_MEDIA,
    title: 'The Viral Comment War',
    context: 'Someone comments on your post about climate change.',
    argument: '"Agey nijer desh thik koro, tarpor climate change niye kotha bolo."',
    options: [
      {
        text: 'Point out this is a "Whataboutism" fallacy.',
        isLogical: true,
        feedback: 'Yes! Problems in one area don\'t negate the importance of another.'
      },
      {
        text: 'Ignore them because they are stupid.',
        isLogical: false,
        feedback: 'While satisfying, it doesn\'t help build logical skills.'
      }
    ]
  }
];
