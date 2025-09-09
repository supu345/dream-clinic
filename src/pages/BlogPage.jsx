import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_blogs } from "../store/reducers/blogReducer";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(get_blogs());
  }, [dispatch]);

  return (
    <div className="mt-[100px]">
      <img
        src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg"
        alt=""
        className="h-[550px] w-full object-cover"
      />
      <div>Home / Blogss</div>

      <div className="">
        {loading && <p>Loading...</p>}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-[20px] py-9">
            {blogs.map((item) => (
              <div className="bg-purple-100 rounded-lg" key={item._id}>
                <div className="px-4">
                  <p className="text-lg font-bold mt-3">{item.title}</p>
                  <p className="py-6">{item.shortDescription}</p>
                  <button className="my-5">Learn more</button>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover rounded-b-lg"
                />
              </div>
            ))}
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default BlogPage;
