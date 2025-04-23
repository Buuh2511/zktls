import { useState } from "react";
import Image from "next/image";
import { VerificationType } from "~~/app/types";

const DATA_OPTION = [
  {
    icon: "/newbie-icon.svg",
    title: "I'm a Newbie",
    desc: "I didn't verify my phone number on Kaggle.",
    iconColor: "#F2F2F2",
  },
  {
    icon: "/verify-icon.svg",
    title: "Verified Member",
    desc: "I have verified my phone number on Kaggle.",
    iconColor: "#DFE9FF",
  },
  {
    icon: "/lightning-icon.svg",
    title: "Performance tier",
    desc: "My performance tier is higher than contributor level.",
    iconColor: "#FFE7D0",
  },
];

export const CustomSearchBox = ({
  openSeachOption,
  openSearch,
  onSelectOption,
}: {
  openSeachOption: boolean;
  openSearch: () => void;
  onSelectOption?: (type: VerificationType) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("I'm a Newbie");

  const handleSelectOption = (title: string, type: VerificationType) => {
    setSelectedOption(title);
    if (onSelectOption) {
      onSelectOption(type);
    }
  };

  return (
    <div className="max-w-[350px] w-full">
      <div className="bg-search-box p-1.5 rounded-2xl w-fit relative">
        <div className="search-box flex items-center gap-1.5">
          <input
            placeholder="Choose who you are"
            className="bg-white w-[320px] outline-none p-2 rounded-xl text-sm"
            value={selectedOption}
            readOnly
          />
          <Image
            src={"/arrow-down-icon.svg"}
            width={16}
            height={16}
            alt="icon"
            className="cursor-pointer"
            onClick={openSearch}
          />
        </div>
      </div>
      {openSeachOption && (
        <div className="border-2 border-[#FFFFFF] rounded-xl bg-[#e9e9e9] px-1.5 py-2.5 absolute top-14 z-40">
          <p className="uppercase text-[#787878] text-xs font-semibold mb-1.5">choose one</p>
          <div className="bg-white p-2 rounded-xl">
            {DATA_OPTION.map((item, index) => (
              <div
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                key={item.title}
                onClick={() =>
                  handleSelectOption(item.title, index === 0 ? "UNVERIFIED" : index === 1 ? "VERIFIED" : "PERFORMANCE")
                }
              >
                <div
                  className="p-1 rounded-md"
                  style={{
                    background: item.iconColor,
                  }}
                >
                  <Image src={item.icon} width={18} height={18} alt="icon" />
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-[#787878]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
