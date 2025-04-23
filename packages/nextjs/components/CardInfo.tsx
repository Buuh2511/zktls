import React from "react";
import Image from "next/image";
import { Primus } from "~~/app/primus";
import { Reclaim } from "~~/app/reclaim";
import { VerificationType } from "~~/app/types";
import { ZkPass } from "~~/app/zkpass";

interface CardInfoProps {
  name: string;
  logo: string;
  desc: string;
  color: string;
  btnText: string;
  btnIcon: string;
  isOpen?: boolean;
  onClick?: () => void;
  url?: string;
  verificationType: VerificationType;
}

export const CardInfo: React.FC<CardInfoProps> = ({ name, logo, desc, color, verificationType, onClick }) => {
  const renderButton = () => {
    switch (name) {
      case "Primus":
        return <Primus verificationType={verificationType} />;
      case "zkPASS":
        return <ZkPass verificationType={verificationType} />;
      case "Reclaim":
        return <Reclaim verificationType={verificationType} onClick={onClick} />;

      default:
        return null;
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={32} height={32} />
        <p
          className="text-[28px] font-medium leading-6"
          style={{
            color: color,
          }}
        >
          {name}
        </p>
      </div>
      <p className="text-xl min-h-20">{desc}</p>
      {renderButton()}
    </div>
  );
};
