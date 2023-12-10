import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";
import useCount from "@/Hooks/useCount";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const Card = (props: { item: PokemonTCG.Set }) => {
  const { images, ...info } = props.item;
  const { increment, addId } = useCount();

  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className=" bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/loadCard/sets/${info.id}`}>
          <CardImage imageUrl={images} />
        </Link>
        <CardInfo info={info} />
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 mr-10 ml-3 px-4 rounded"
          onClick={handleModal}
        >
          view details
        </button>

        <Transition.Root show={openModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-5"
            onClose={setOpenModal}
            open={openModal}
          >
            <Transition.Child
              as={Fragment}
              enter="duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700/50 backdrop-blur-md transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="duration-300"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[500px] sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-center">
                        <div className="mt-3  sm:ml-4 sm:mt-0 text-left">
                          <div className="mt-2">
                            <Link href={`/loadCard/sets/${info.id}`}>
                              <div className="h-[230px] p-16 pt-36 mb-5 m-auto flex justify-center items-center bg-gray-100 hover:bg-gray-200 border-[1px] border-gray-300 transition rounded-md">
                                <CardImage imageUrl={images} />
                              </div>
                            </Link>
                            <CardInfo info={info} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 pb-10">
                      <div className="m-auto">
                        <div className="px-10 grid grid-cols-2">
                          <div className="flex justify-start">
                            <button
                              className="text-white form-button clear w-28 bg-green-500 rounded hover:bg-blue-700"
                              type="button"
                              onClick={() => {
                                increment();
                                addId(info.id);
                              }}
                            >
                              Add to Cart
                            </button>
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="text-white form-button clear w-28 bg-green-500 rounded hover:bg-red-700 py-2"
                              onClick={() => setOpenModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

export default Card;
