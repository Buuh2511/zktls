import { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerifyQrcodeModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [qrUrl, setQrUrl] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      const savedQrUrl = localStorage.getItem("qrcode_reclaim");
      if (savedQrUrl) {
        setQrUrl(savedQrUrl);
      }
    }
  }, [isOpen]);

  const handleImageClick = () => {
    if (qrUrl) {
      window.open(qrUrl, "_blank");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-1.5 max-w-[543px] w-full modal-shadow">
        <div className="rounded-2xl relative">
          <div className="bg-white rounded-t-2xl">
            <div className="btn-shadow cursor-pointer w-fit h-fit absolute top-4 right-4">
              <div className="btn-primary w-8 h-8 flex items-center justify-center" onClick={onClose}>
                <Image src={"/x-icon.svg"} width={20} height={20} alt="icon" />
              </div>
            </div>
            <div className="p-8 flex flex-col items-center">
              <div
                className={`mt-10 cursor-pointer ${qrUrl ? "hover:opacity-80 transition-opacity" : ""}`}
                onClick={qrUrl ? handleImageClick : undefined}
              >
                <Image src={"/reclaim-verify.png"} width={300} height={300} alt="verify" />
              </div>

              <h2 className="text-3xl font-semibold text-center mb-2 mt-8 leading-7">
                {qrUrl ? (
                  <>
                    Click on image
                    <br />
                    to open verification link
                  </>
                ) : (
                  <>
                    Waiting for
                    <br />
                    Reclaim verification
                  </>
                )}
              </h2>
              <p className="text-[#787878] text-center ">
                {qrUrl
                  ? "The image will redirect you to the verification page."
                  : "Please wait while we generate your verification link."}
              </p>
            </div>
          </div>

          <div className="bg-reclaim-verify p-4 rounded-b-2xl flex items-center justify-center mt-1.5">
            <div className="flex items-center gap-2">
              <Image src={"/reclaim.svg"} width={30} height={30} alt="icon" />
              <span className="text-[#626262] text-xl font-bold sf-rounded">RECLAIM VERIFICATION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyQrcodeModal;
