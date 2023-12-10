import Image from "next/image";
import { SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";

const CardImage = ({ imageUrl }: { imageUrl: SetImage }) => {
  const { logo } = imageUrl;
  return (
    <>
      <div className="relative w-[300px] h-[300px] p-16">
        <Image
          src={logo}
          alt={"images"}
          width={300}
          height={300}
          priority={true}
        />
      </div>
    </>
  );
};

export default CardImage;
