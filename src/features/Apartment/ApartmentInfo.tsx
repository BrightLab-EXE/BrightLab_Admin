import Image from "next/image";
import React from "react";

const ApartmentInfo = () => {
  return (
    <div className="text-left text-[#450805]">
      <div className="w-max mx-auto">
        <Image
          src={"/images/examples/apartment.png"}
          width={467}
          height={266}
          alt="apartment"
        />
      </div>

      <div className="sm:py-3 py-2">
        <p className="text-xl font-semibold text-black">Thông tin căn hộ</p>
        <p className="py-1 sm:py-2">
          BS16.2501 | Full trọn bộ | Tòa BS16, Khu The Beverly Solari
        </p>
        <div className="flex justify-between">
          <div className="flex items-start gap-2">
            <Image
              src={"/images/home.svg"}
              width={24}
              height={24}
              alt="homeIcon"
            />
            <div>
              <p>5,5 triệu/ tháng</p>
              <p className="text-[#46140480] text-sm">Giá thuê</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/bed.svg"}
              width={24}
              height={24}
              alt="bedIcon"
            />{" "}
            <div>
              <p>1</p>
              <p className="text-[#46140480] text-sm">Phòng ngủ</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/bath.svg"}
              width={24}
              height={24}
              alt="bathIcon"
            />{" "}
            <div>
              <p>1</p>
              <p className="text-[#46140480] text-sm">Nhà tắm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-3 py-2 border-b border-[#FFE5D4]">
        <p className="text-xl font-semibold text-black pb-1 sm:pb-2">
          Chi tiết
        </p>
        <div className="flex justify-between">
          <div className="flex items-start gap-2">
            <Image
              src={"/images/home.svg"}
              width={24}
              height={24}
              alt="homeIcon"
            />
            <div>
              <p>Căn hộ</p>
              <p className="text-[#46140480] text-sm">Loại căn</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/stair.svg"}
              width={24}
              height={24}
              alt="bedIcon"
            />{" "}
            <div>
              <p>Tầng 11</p>
              <p className="text-[#46140480] text-sm">Vị trí tầng</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/square.svg"}
              width={24}
              height={24}
              alt="bathIcon"
            />{" "}
            <div>
              <p>70,30m2</p>
              <p className="text-[#46140480] text-sm">Diện tích tim tường</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-3 py-2">
        <p className="text-xl font-semibold text-black pb-1 sm:pb-2">
          Thông tin người thuê
        </p>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex items-start gap-2">
            <Image
              src={"/images/home.svg"}
              width={24}
              height={24}
              alt="homeIcon"
            />
            <div>
              <p>Nguyễn Thành Long</p>
              <p className="text-[#46140480] text-sm">Họ và tên</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/stair.svg"}
              width={24}
              height={24}
              alt="bedIcon"
            />{" "}
            <div>
              <p>th***ng@gmail.com</p>
              <p className="text-[#46140480] text-sm">Địa chỉ email</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src={"/images/square.svg"}
              width={24}
              height={24}
              alt="bathIcon"
            />{" "}
            <div>
              <p>02132456789</p>
              <p className="text-[#46140480] text-sm">Số điện thoại</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
