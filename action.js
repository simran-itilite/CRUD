export const DISPLAY_STUDENTS = 'DISPLAY_STUDENTS';

// Get students - INDEX
export const studentInfo = (students) => ({
    type: DISPLAY_STUDENTS,
    data: {students}
});