const PostLoading = () => {
  return (
    <article className="bg-white w-[16rem] h-[12rem] rounded-md">
      <div className="bg-gray-700 p-2 h-full rounded-md opacity-100">
        <div className="flex flex-col gap-2 p-2">
          <div className="h-7 w-3/4 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse" />
        </div>

        <div className="flex gap-2 p-2">
          <div className="h-8 w-28 bg-gray-300 rounded animate-pulse" />
          <div className="h-8 w-16 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </article>
  )
}

export default PostLoading
