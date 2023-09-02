import React from 'react';
import { CourseState } from '../../Model/Course';
import CourseList from './CouresList'; // Typo here; should be 'CourseList'

// Define the props interface for the Course component
interface CourseProps {
  courses: CourseState[];
}

// Course component is a functional component receiving 'courses' as a prop
const Course: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className="flex flex-col space-y-3 p-2">
      {/* Title for the list of available courses */}
      <h1 className="capitalize text-3xl font-bold">Available courses</h1>

      {/* Render the CourseList component and pass the 'courses' prop */}
      <CourseList courses={courses} />
    </div>
  );
};

export default Course;
