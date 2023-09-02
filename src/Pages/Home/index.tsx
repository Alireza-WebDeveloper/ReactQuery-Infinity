import Course from '../../Components/Course';
import useGetCourse from '../../Hook/useGetCourse';
import Loading from '../../Utils/Spinner';

const HomePage = () => {
  // Fetch course data using a custom hook
  const { fetchNextPage, data, isLoading, isFetchingNextPage } = useGetCourse();

  // Display a loading spinner while fetching data
  if (isLoading) {
    return <Loading />;
  }

  // Destructure data into pages and pageParams
  const { pages, pageParams }: any = data;

  // Get the last page index from pageParams
  const lastIndex: number = pageParams.slice(-1)[0];

  // Flatten the array of course pages into a single array
  const courses: any[] = [].concat(...pages);

  // Function to handle loading the next page of courses
  const handleNextPage = () => {
    fetchNextPage();
  };

  // Determine whether to render the "Load More Courses" button
  const shouldRenderLoadMoreButton: boolean =
    !isFetchingNextPage && lastIndex !== 5;

  return (
    <div className="flex flex-col space-y-2">
      {/* Display a loading spinner while fetching the next page */}
      {isFetchingNextPage ? <Loading /> : <Course courses={courses} />}

      {/* Render the "Load More Courses" button conditionally */}
      {shouldRenderLoadMoreButton && (
        <button
          onClick={handleNextPage}
          className="bg-orange-500 w-fit hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          Load More Courses
        </button>
      )}
    </div>
  );
};

export default HomePage;
