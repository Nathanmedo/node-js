let detail = {
    name : 'Chinedu',
    schoolClass: 's3',
    Phone: {no: '344', det: 'peace and love'},
    tuitionPaid: false
}

const { name, schoolClass, Phone: { no, det}, tuitionPaid } = detail;
console.log(name, schoolClass, no, det, tuitionPaid);