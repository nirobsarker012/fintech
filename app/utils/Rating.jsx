import React from "react";

const Rating = ({ value }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: value }, (_, index) => (
        <Image
          key={index}
          src={"/images/star.svg"}
          alt="star"
          width={16}
          height={12}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export default Rating;
