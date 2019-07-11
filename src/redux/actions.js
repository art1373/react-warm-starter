/* eslint-disable sort-keys-fix/sort-keys-fix */
export const Increment = value => ({
  type: 'INCREMENT',
  value,
});

export const Decrement = value => ({
  type: 'DECREMENT',
  value,
});

export const GetData = data => ({
  type: 'GET_DATA_SUCCESSFULLY',
  data,
});
