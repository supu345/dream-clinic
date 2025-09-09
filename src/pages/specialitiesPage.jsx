import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_specialities } from "../store/reducers/homeReducer";
import { Link } from "react-router-dom";

const SpecialitiesPage = () => {
  const dispatch = useDispatch();
  const { specialities, status } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_specialities());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (status === "succeeded" && specialities.length === 0) {
    return <p className="text-center mt-10">No specialities found.</p>;
  }

  return (
    <div className="mt-[100px]">
      <img
        src="https://images.pexels.com/photos/6753349/pexels-photo-6753349.jpeg"
        alt="banner"
        className="h-[500px] w-full object-cover"
      />
      <div className="p-5">Home / About Us</div>
      <p className="px-7">working...</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-[20px] py-9">
        {specialities.map((item) => (
          <div
            key={item._id}
            className="bg-[#1C65B3]/20 rounded-lg overflow-hidden shadow"
          >
            <img
              src={item.image1}
              alt={item.title}
              className="h-[280px] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-bold mt-3">{item.title}</p>
              <p className="py-4">{item.shortDescription}</p>
              <Link
                to={`/specialities/${item._id}`}
                className="inline-block px-4 py-2 bg-[#1C65B3] text-white rounded-full hover:bg-white hover:text-[#1C65B3] transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesPage;
