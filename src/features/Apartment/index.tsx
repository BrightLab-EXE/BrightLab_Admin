/* eslint-disable @typescript-eslint/no-unused-vars */
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";
import ApartmentDetailModal from "./ApartmentDetailModal";
import useApartmentStore from "./apartment.store";
import RentAgreementModal from "./RentAgreementModal";

const Apartment = () => {
  const { setOpenApartmentDetail, setOpenRentAgreementDetail } =
    useApartmentStore();

  return (
    <div className="w-full">
      <div className="font-bold text-2xl text-black">Quản lý căn hộ</div>
      <div className="py-6">
        <Table
          column={[
            {
              name: "Căn hộ",
              renderItem: (item) => <div>{item.value || "S103.2026"}</div>,
            },
            {
              name: "Giá tiền thuê",
              renderItem: (item) => (
                <div>{item.value || "5,5 triệu/tháng"}</div>
              ),
            },
            {
              name: "Người sở hữu",
              renderItem: (item) => <div>{item.value || "abc@gmail.com"}</div>,
            },
            {
              name: "Tình trạng thuê",
              renderItem: (item) => (
                <div className="text-[10px] px-2 py-1 w-max mx-auto rounded-lg bg-[#FBFF0033] border-[#FBFF00] border">
                  {item.value || "Đã cho thuê"}
                </div>
              ),
            },
            {
              name: "Tình trạng hợp đồng",
              renderItem: (item) => (
                <div className="text-[10px] px-2 py-1 w-max mx-auto rounded-lg bg-[#FF3C0033] border-[#FF3C00] border text-[#FF4E18]">
                  {item.value || "Hết hạn"}
                </div>
              ),
            },
            {
              name: "Hết hạn hợp đồng",
              renderItem: (item) => <div>{item.value || "20/03/2025"}</div>,
            },
            {
              name: "Tình trạng nhà",
              renderItem: (item) => (
                <div
                  className="text-[#FF4E18] border border-[#FF4E18] w-max rounded-lg mx-auto py-1 px-4 cursor-pointer"
                  onClick={() => setOpenApartmentDetail(true)}
                >
                  Chi tiết
                </div>
              ),
            },
            {
              name: "Hợp đồng thuê nhà",
              renderItem: (item) => (
                <div
                  className="text-[#FF4E18] border border-[#FF4E18] w-max rounded-lg mx-auto py-1 px-4 cursor-pointer"
                  onClick={() => setOpenRentAgreementDetail(true)}
                >
                  Chi tiết
                </div>
              ),
            },
            {
              name: "",
              renderItem: (item) => (
                <div className="cursor-pointer">
                  <Image
                    src={"/images/pencil.svg"}
                    width={15}
                    height={15}
                    alt="pencilIcon"
                  />
                </div>
              ),
            },
          ]}
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </div>
      <ApartmentDetailModal />
      <RentAgreementModal />
    </div>
  );
};

export default Apartment;
