"use client";

import useCommonStore from "@/store/common.store";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Sidebar = () => {
  const { setTab } = useCommonStore();

  const tabList = [
    { name: "Căn hộ", key: "apartment" },
    { name: "Khách hàng", key: "client" },
    { name: "Giao dịch", key: "transaction" },
    { name: "Dịch vụ", key: "service" },
    { name: "Cài đặt", key: "setting" },
    { name: "Phân quyền", key: "role" },
    // { name: "Đơn đặt hàng & thanh toán", key: "order&payment" },
  ];

  return (
    <div className="rounded-2xl py-5 px-4 shadow-lg !bg-[#FFF4ED]">
      <div className="flex gap-5 items-center mb-4">
        <div className="w-9 h-9 rounded-full bg-gray-300"></div>
        <div className="text-black font-semibold">Mai Đinh Admin</div>
      </div>
      {tabList.map((tab) => (
        <div
          key={tab.key}
          className="py-5 px-3.5  hover:bg-[#FFE5D4] cursor-pointer rounded-md flex items-center justify-between group ease-in-out duration-100"
          onClick={() => setTab(tab.key)}
        >
          <div className="flex gap-4 items-center">
            <div className="pb-1">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.51753 1.14159C7.7329 0.771815 8.2671 0.771814 8.48247 1.14159L10.7642 5.05909C10.8431 5.19454 10.9753 5.29059 11.1285 5.32377L15.5594 6.28325C15.9776 6.37382 16.1427 6.88187 15.8576 7.20097L12.8369 10.5816C12.7324 10.6985 12.6819 10.8539 12.6977 11.0099L13.1544 15.5204C13.1975 15.9461 12.7654 16.2601 12.3738 16.0875L8.22515 14.2594C8.08171 14.1962 7.91829 14.1962 7.77485 14.2594L3.62624 16.0875C3.23465 16.2601 2.80247 15.9461 2.84558 15.5204L3.30226 11.0099C3.31805 10.8539 3.26756 10.6985 3.16311 10.5816L0.142446 7.20097C-0.142675 6.88187 0.0224004 6.37382 0.44063 6.28325L4.87149 5.32377C5.02469 5.29059 5.1569 5.19454 5.23579 5.05909L7.51753 1.14159Z"
                  className="fill-[#AEB9E1] group-hover:fill-[#FF4E18]"
                />
              </svg>
            </div>

            <p className="text-[#AEB9E1] group-hover:text-[#FF4E18]">
              {tab.name}
            </p>
          </div>

          <ChevronRightIcon
            className="text-[#AEB9E1] group-hover:text-[#FF4E18]"
            widths={20}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
