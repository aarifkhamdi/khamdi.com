import Image from 'next/image';

export default function PlaygroundQrCodeComponentPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-1/2 xl:w-1/6 bg-white rounded-2xl">
        <div className="flex justify-center">
          <Image
            className="p-3 size-2/3"
            src="/image-qr-code.png"
            width={576}
            height={576}
            alt="QR-code"
          />
        </div>
        <h1 className="pt-2 font-bold text-center pl-2 pr-2 h-1/6">
          Improve your front-end skills by building projects
        </h1>
        <h2 className="mt-3 pb-4 pl-2 text-center pr-2 h-1/6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}
