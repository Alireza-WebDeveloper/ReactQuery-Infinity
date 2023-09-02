import { useInfiniteQuery } from '@tanstack/react-query';
import { asyncGetCourseByInfinity } from '../../StateManagment/Service/Course';

const useGetCourse = () => {
  // Define the query key as a string or an array depending on your use case
  const queryKey = ['course']; // Or use queryKey = ['course'] if needed
  const queryFn = ({ pageParam = 1 }) => asyncGetCourseByInfinity(pageParam, 4);

  // Use useInfiniteQuery to fetch and manage course data
  const {
    isLoading,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    data,
    ...result
  } = useInfiniteQuery(queryKey, queryFn, {
    // Define a custom function to determine the next page param
    getNextPageParam: (_lastPage, pages) => {
      return pages.length <= 10 ? pages.length + 1 : undefined;
    },
  });

  // Return an object with the relevant properties
  return {
    isLoading,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    data,
  };
};

export default useGetCourse;
