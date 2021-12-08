const adminDoctorResolver = {
    doctorById: async (_, { id }, { dataSource }) => {
        return await dataSource.doctorById(id);
    }
}

module.exports = adminDoctorResolver;