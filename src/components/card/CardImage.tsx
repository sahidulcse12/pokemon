import Image from "next/image";
import { SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";

const CardImage = ({ imageUrl }: { imageUrl: SetImage }) => {
  const { logo } = imageUrl;
  return (
    <>
      <div className="relative w-[300px] h-[250px]">
        <Image
          src={logo}
          alt={"images"}
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </>
  );
};

export default CardImage;
