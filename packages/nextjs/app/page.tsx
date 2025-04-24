"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { VerificationType } from "./types";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { CardInfo } from "~~/components/CardInfo";
import { CustomSearchBox } from "~~/components/CustomSearchBox";
import { ColumnDivider, RowDivider } from "~~/components/Divider";
import { DotDecorIcon } from "~~/components/Icons/DotDecorIcon";
import VerifyQrcodeModal from "~~/components/Modals/VerfifyQrcodeModal";

const DATA_INFO = [
  {
    name: "Primus",
    logo: "/primus.svg",
    desc: "Primus lets you verify and compute any data in web3.",
    color: "#FD4C00",
    btnText: "Start Verification",
    btnIcon: "/redirect-icon.svg",
    url: "/",
  },

  {
    name: "zkPASS",
    logo: "/zkpass.svg",
    desc: "Verify your real-world private data without revealing your private details.",
    color: "#191919",
    btnText: "Start Verification",
    btnIcon: "/redirect-icon.svg",
    url: "/",
  },
  {
    name: "Reclaim",
    logo: "/reclaim.svg",
    desc: "Generate proofs of any data from any website in less than 6 seconds",
    color: "#0000EE",
    btnText: "Open QR Code",
    btnIcon: "/qr-icon.svg",
    isOpen: true,
    url: "/",
  },
];

const Home: NextPage = () => {
  const { setTheme } = useTheme();
  const [openVerify, setOpenVerify] = useState(false);
  const [openSeachOption, setOpenSearchOption] = useState(false);
  const [verificationType, setVerificationType] = useState<VerificationType>("UNVERIFIED");

  const handleSelectVerificationType = (type: VerificationType) => {
    setVerificationType(type);
    setOpenSearchOption(false);
  };

  useEffect(() => {
    setTheme("light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        console.log("All environment variables:", data);
      });
  }, []);

  return (
    <div className=" relative h-full flex flex-col justify-center flex-1">
      <VerifyQrcodeModal isOpen={openVerify} onClose={() => setOpenVerify(false)} />
      <Image src={"/decore-bg.png"} width={110} height={220} alt="decor" className="absolute z-0 left-0 top-0" />
      <Image
        src={"/decore-bg.png"}
        width={110}
        height={220}
        alt="decor"
        className="absolute z-0 right-0 top-0 -scale-x-100"
      />
      <div>
        <div className="content">
          <Image src={"/stormbit-icon.svg"} alt="logo" width={66} height={66} className="mb-10 mx-auto" />
        </div>
        <h2 className="text-[40px] text-[#191919] uppercase font-medium text-center mb-6">
          zktls <span className="italic font-extralight">verification_</span>
        </h2>
        <div className="relative">
          <RowDivider color="#D8D4FF" className="absolute top-0.5" />
          <RowDivider color="#D8D4FF" className="absolute bottom-0.5" />

          <div className="content p-3 relative">
            <div className="fixed content w-full h-screen top-0 left-2 right-2 px-0.5">
              <div className="relative w-full h-full">
                <ColumnDivider className="absolute left-0" />
                <ColumnDivider className="absolute right-0" />
              </div>
            </div>
            <DotDecorIcon className="absolute -top-2 -left-2" color="#CACACA" />
            <DotDecorIcon className="absolute -top-2 -right-2" color="#8161FF" />
            <DotDecorIcon className="absolute -bottom-2 -left-2" color="#8161FF" />
            <DotDecorIcon className="absolute -bottom-2 -right-2" color="#CACACA" />
            <div className="relative">
              <Image
                src={"/person.gif"}
                alt="gif"
                width={120}
                height={120}
                className="-scale-x-100 absolute bottom-[15%] right-[35%]"
              />
              <Image src={"/sky-bg.png"} width={1300} height={300} alt="bg" />
              <div className="absolute z-40 left-1/2 -bottom-7 transform -translate-x-1/2">
                <CustomSearchBox
                  openSeachOption={openSeachOption}
                  openSearch={() => setOpenSearchOption(!openSeachOption)}
                  onSelectOption={handleSelectVerificationType}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content relative z-20">
          <div className="grid grid-cols-3 gap-9 mx-11 mt-12 ">
            {DATA_INFO.map(item => (
              <CardInfo
                key={item.name}
                {...item}
                onClick={() => setOpenVerify(true)}
                verificationType={verificationType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
