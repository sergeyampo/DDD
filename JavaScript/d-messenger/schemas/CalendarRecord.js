({
  Entity: {},

  startDateTime: { type: 'datetime' },
  endDateTime: { type: 'datetime' },
  title: { type: 'string' },
  description: { type: 'string', require: false },
  patient: { one: 'Account', required: false },
  specialist: { one: 'Account', required: false },
  cancelledAt: { type: 'datetime', required: false },
  completedSuccessfully: { type: 'boolean', required: false }
});
