import { Rule } from './rule';

export const WINNER_RULES: Rule[] = [
  { code: 'rule1', coordinates: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }] },
  { code: 'rule2', coordinates: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }] },
  { code: 'rule3', coordinates: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }] },
  { code: 'rule4', coordinates: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }] },
  { code: 'rule5', coordinates: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }] },
  { code: 'rule6', coordinates: [{ x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }] },
  { code: 'rule7', coordinates: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }] },
  { code: 'rule8', coordinates: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }] },
];
