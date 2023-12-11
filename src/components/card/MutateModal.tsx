import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useState } from "react";

const MutateModal = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [ename, setEname] = useState("");

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEname(event.target.value);
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setEname("");
  // };

  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditModal = () => {
    setEditOpen(!editOpen);
  };

  return (
    <>
      {/* <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 mr-10 ml-3 px-4 rounded"
        onClick={handleModal}
      >
        Edit
      </button>

      <CustomModalComponent info={info} onClose={closeModal} open={openModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="ename"
            id="ename"
            value={ename}
            onChange={handleChange}
            required
          />
          <div className="mt-2">
            <input
              type="submit"
              onClick={() => updateName({ setid: info.id!, setName: ename })}
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </form>
      </CustomModalComponent> */}

      <Transition.Root show={editOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-5"
          onClose={setEditOpen}
          open={editOpen}
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
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold text-gray-900"
                        >
                          Edit Name
                        </Dialog.Title>
                        <div className="mt-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 pb-10">
                    <div className="m-auto">
                      <div className="px-10 grid grid-cols-2">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="form-button clear w-28"
                            onClick={() => setEditOpen(false)}
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
    </>
  );
};

export default MutateModal;
