({
  // patientId should usually be passed in the auth data,
  // but for simplicity we are hardcoding it here
  async create([{ specialistId, patientId, startDateTime, endDateTime }]) {
    const appointmentType = {
      title: 'MRI',
      description: 'Magnetic resonance imaging',
    };

    return await db('CalendarRecord').create({
      specialistId,
      patientId,
      startDateTime,
      endDateTime,
      ...appointmentType
    });
  }
});
