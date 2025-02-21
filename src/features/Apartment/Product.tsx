import StarSVG from "@/components/Star";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="text-[#450805] text-left space-y-2">
      <p className="text-center">22/01/2025</p>
      <Image
        src="/images/examples/apartment.png"
        width={220}
        height={178}
        alt="productImage"
      />
      <div className="flex gap-4">
        <p className="text-sm">Xuất sắc</p>
        <div className="flex gap-2">
          <StarSVG />
          <StarSVG />
          <StarSVG />
          <StarSVG />
          <StarSVG />
        </div>
      </div>
      <p className="text-sm">Dịch vụ sử dụng: Sơn tường</p>
    </div>
  );
};

export default Product;
