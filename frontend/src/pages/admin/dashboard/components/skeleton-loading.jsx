const SkeletonLoading = () => {
  return (
    <div className="p-2 sm:p-4 rounded-md shadow-md hover:shadow-lg">
      <div role="status" className="space-y-2 animate-pulse">
        <div className="flex items-center gap-x-3">
          <div className={`p-4 rounded-md bg-gray-300`}></div>
          <div className="h-3 bg-gray-200 rounded-full w-24"></div>
        </div>
        <div className="h-3 bg-gray-200 rounded-full w-16 mt-2"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonLoading;
