export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course }
  // return { type: 'CREATE_COURSE', course } // these are equivalent
};

