import React from "react";
import useApartmentStore from "./apartment.store";
import Modal from "@/components/Modal";
import ApartmentInfo from "./ApartmentInfo";
import ServiceHistory from "./ServiceHistory";

const ApartmentDetailModal = () => {
  const { openApartmentDetail: open, setOpenApartmentDetail: setOpen } =
    useApartmentStore();

  return (
    <Modal open={open} setOpen={setOpen} className="w-[1460px]">
      <div className="flex gap-6 w-full">
        <div className="w-1/3">
          <ApartmentInfo />
        </div>
        <div className="w-2/3">
          <ServiceHistory />
        </div>
      </div>
    </Modal>
  );
};

export default ApartmentDetailModal;
