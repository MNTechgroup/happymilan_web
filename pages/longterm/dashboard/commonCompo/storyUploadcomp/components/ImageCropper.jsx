import { useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useSelector } from "react-redux";
import setCanvasPreview from "../CanvasPreview";
import Image from "next/image";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 100;

const ImageCropper = ({ setModalOpen, closeModal, updateAvatar }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({
    aspect: ASPECT_RATIO,
    unit: "%",
    width: MIN_DIMENSION,
    height: MIN_DIMENSION,
  });
  const [error, setError] = useState("");

  const [ImageData, SetImageData] = useState()
  const [InputVisible, setInputVisible] = useState(true)

  const onSelectFile = (e) => {

    if (e.target.files.length > 0) {
      // Hide the input element
      setInputVisible(false);
    }

    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {


      const blobUrl = URL.createObjectURL(file);

      SetImageData(file)
      const imageData = {
        contentType: file.type,
        data: blobUrl,
        id: 0, // You can set this based on your application logic
        key: file.name, // Use file name or any other identifier
        size: file.size
      };
    

      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };



  const loader = useSelector((state) => state.usersact.profileimageupdate)


  const SpanStyle = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }


  const Text2 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px" /* 133.333% */
  }

  const Text1 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal" /* 133.333% */
  }

  const Text3 = {
    color: "#606060",
    fontFamily: "Poppins",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  return (
    <div>
      <div className="grid place-items-center">
        <div className="2xl:w-[540px]  xl:w-[540px]  w-[90%]">
          <ul className="flex justify-between">
            <li>
              <h1 className="" style={SpanStyle}>Upload Photo</h1>
            </li>
            <li>
              <img alt='close-icon' className="w-[24px] h-[24px] cursor-pointer" onClick={closeModal} src="/assests/social/close.svg" />
            </li>
          </ul>
        </div>
      </div>
      {InputVisible && (

        <div className='md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[230px] 2xl:w-[526px] 2xl:h-[330px] xl:w-[526px] xl:h-[330px] bg-[#F5F5F5] rounded-[10px]'>
          <label htmlFor="dropzone-file">
            <input id="dropzone-file" className="cursor-pointer opacity-0 absolute" type="file" accept="image/*" onChange={onSelectFile} />
            <div className='mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto'>
              <Image alt="drag-drop" width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
            </div>
            <div className='text-center'>
              <h1 style={Text1} className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]'>Select Photos</h1>
              <p style={Text2}>Or drag and drop a file</p>
            </div>
          </label>
        </div>
      )}
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {imgSrc && (
        <div className="grid place-items-center relative top-[40px]">

          <div className="2xl:w-[540px] 2xl:h-[325px] xl:w-[540px] xl:h-[325px] w-[90%] h-[325px] bg-[#000] rounded-[10px]">
            <div className="grid place-items-center">
              <ReactCrop
                crop={crop}
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                circularCrop
                keepSelection
                aspect={ASPECT_RATIO}
                minWidth={MIN_DIMENSION}
              >
                <img
                  ref={imgRef}
                  src={imgSrc}
                  alt="Upload"
                  style={{ maxHeight: "325px" }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            </div>
            <div className="text-center pt-[20px]">
              <h1 style={Text3}>Adjust the round object to set your photo</h1>
            </div>
          </div>
          <div className="flex justify-center relative top-[80px] space-x-[30px]">
            <button className="cursor-pointer w-[125px] h-[49px] rounded-[10px]  bg-[#FFF] border-[1px] border-[black]">
              <input className="cursor-pointer w-[100px] opacity-0 absolute" type="file" accept="image/*" onChange={onSelectFile} />
              Change</button>
            <button id="grad-button" className="cursor-pointer w-[125px] h-[49px] rounded-[10px]"

              onClick={() => {
                setCanvasPreview(
                  imgRef.current, // HTMLImageElement
                  previewCanvasRef.current, // HTMLCanvasElement
                  convertToPixelCrop(
                    crop,
                    imgRef.current.width,
                    imgRef.current.height
                  )
                );

                const canvas = previewCanvasRef.current;
                canvas.toBlob((blob) => {
                  if (blob) {
                    const urldata = URL.createObjectURL(blob)

                    const CurrentImageData = {
                      key: ImageData.name,
                      contentType: ImageData.type,
                      data: urldata
                    }

                    const blobData = {
                      size: blob.size,
                      type: blob.type,
                      blob: URL.createObjectURL(blob)

                    };
                    

                  }
                }, "image/jpeg");
              }}

            >Upload
              {loader.loading ?
                <img alt="loader" width={25} height={25} className=' w-[25px] h-[25px] animate-spin inline relative left-[5px]' src='/assests/animation/loaderIcon.svg' />
                : ""}

            </button>
          </div>
        </div>
      )}
      <canvas
        ref={previewCanvasRef}
        style={{ display: "none" }}
        width={MIN_DIMENSION}
        height={MIN_DIMENSION}
      ></canvas>
    </div>
  );
};

export default ImageCropper;
