import React from "react";
import useApartmentStore from "./apartment.store";
import Modal from "@/components/Modal";
import ApartmentInfo from "./ApartmentInfo";
import Image from "next/image";

const RentAgreementModal = () => {
  const { openRentAgreementDetail: open, setOpenRentAgreementDetail: setOpen } =
    useApartmentStore();

  console.log(open);

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      className="w-[1460px] h-[calc(100vh-80px)]"
    >
      <div className="flex gap-6 w-full">
        <div className="w-1/3">
          <ApartmentInfo />
        </div>
        <div className="w-2/3 overflow-y-hidden">
          {/* <PdfViewer /> */}
          <div className="overflow-y-auto  h-[calc(100vh-80px)]">
            <Image
              src={"/pdfexample/agreementex.png"}
              width={1324}
              height={1713}
              alt="agreement"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RentAgreementModal;
