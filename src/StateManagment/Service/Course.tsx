import { CourseState } from '../../Model/Course';
import { ProductState } from '../../Model/Product';
import BaseApi from '../Base';

const asyncGetCourse = async () => {
  try {
    const response = await BaseApi.get<ProductState>('/course');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncGetCourseByInfinity = async (pageParam: any, pageLimit: any) => {
  try {
    const response = await BaseApi.get<CourseState[]>(
      `/course?_page=${pageParam}&_limit=${pageLimit}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetCourse, asyncGetCourseByInfinity };
