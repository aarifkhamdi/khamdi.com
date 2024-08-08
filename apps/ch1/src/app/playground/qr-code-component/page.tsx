import Image from 'next/image';

export default function PlaygroundQrCodeComponentPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-1/2 xl:w-1/5 bg-white rounded-2xl">
        <div className="flex justify-center">
          <Image
            className="p-5 size-max rounded-3xl"
            src="/image-qr-code.png"
            width={576}
            height={576}
            alt="QR-code"
          />
        </div>
        <h1 className="pt-2 font-bold text-center pl-5 pr-5 h-1/6">
          Improve your front-end skills by building projects
        </h1>
        <h2 className="mt-3 pb-4 pl-5 text-center pr-5 h-1/6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}
