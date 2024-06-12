import ImageCropper from "../../../sample/components/ImageCropper";
// w-[95%] sm:w-[50%] min-h-[500px]
const Modal = ({setModalOpen, updateAvatar, closeModal }) => {
    return (
        <div
            className="relative z-[101]"
            aria-labelledby="crop-image-dialog"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-[black] bg-opacity-30 transition-all "></div>
            <div className="grid place-items-center">
            <div className="ml-[50px]  fixed inset-0 z-10 w-[90%] overflow-y-auto">
                <div className="flex min-h-[600px] justify-center px-2 py-12 text-center ">
                    <div className="relative 
                    
                    w-[45%] h-[550px]
                   rounded-2xl bg-[#FFF] text-slate-100 text-left shadow-xl transition-all">
                        <div className="px-5 py-4">
                            <button
                                type="button"
                                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                                onClick={closeModal}
                            >
                                <span className="sr-only">Close menu</span>
                               
                            </button>
                            <ImageCropper
                                updateAvatar={updateAvatar}
                                closeModal={closeModal}
                                setModalOpen={setModalOpen}
                            />
                        </div>
                       
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};
export default Modal;
