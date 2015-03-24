export const sets = {
  core: {}
}

export const targets = {
  any: {},
  player: {},
  other: {}
}

export const types {
  agriculture: {},
  dairy: {},
  restaurant: {},
  store: {},
  industry: {},
  commercial: {}
}

export const landmarks = [
  {
    id: '001',
    name: 'Train Station',
    description: 'You may roll 1 or 2 die.',
    cost: 4
  },
  {
    id: '002',
    name: 'Shopping Mall',
    description: 'Your restaurant and store establishments give you 1 extra coin',
    cost: 10
  },
  {
    id: '003',
    name: 'Amusement Park',
    description: 'If you roll doubles, you may take another turn immediately after this one',
    cost: 16
  },
  {
    id: '004',
    name: 'Radio Tower',
    description: 'You may re-roll once per turn',
    cost: 22
  }
]

export const establishments = [
  {
    id: '001',
    name: 'Wheat',
    description: `Gain 1 gold on any player's turn.`,
    cost: 1,
    conditions: {
      die: [1]
    },
    target: targets.any,
    type: types.agriculture,
    set: sets.core
  },
  {
    id: '002',
    name: 'Ranch',
    description: `Gain 1 gold on any player's turn.`,
    cost: 1,
    conditions: {
      die: [1]
    },
    target: targets.any,
    type: types.dairy,
    set: sets.core
  },
  {
    id: '003',
    name: 'Bakery',
    description: `Gain 1 gold on your turn only.`,
    cost: 1,
    conditions: {
      die: [2, 3]
    },
    target: targets.player,
    type: types.store,
    set: sets.core
  },
  {
    id: '004',
    name: 'Cafe',
    description: 'Take one gold from the player who rolled.',
    cost: 2,
    conditions: {
      die: [3]
    },
    target: targets.other,
    type: types.restaurant,
    set: sets.core
  }
]