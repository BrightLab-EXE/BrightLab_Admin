import { create } from "zustand";

export interface IApartmentStore {
  openApartmentDetail: boolean;
  setOpenApartmentDetail: (value: boolean) => void;
  openRentAgreementDetail: boolean;
  setOpenRentAgreementDetail: (value: boolean) => void;
}

const useApartmentStore = create<IApartmentStore>((set) => ({
  openApartmentDetail: false,
  setOpenApartmentDetail: (value: boolean) =>
    set(() => ({ openApartmentDetail: value })),
  openRentAgreementDetail: false,
  setOpenRentAgreementDetail: (value: boolean) =>
    set(() => ({ openRentAgreementDetail: value })),
}));

export default useApartmentStore;
