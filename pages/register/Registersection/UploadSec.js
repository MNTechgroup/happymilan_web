import React, { useCallback } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import { updateFormData } from '../../../store/actions/registerUser'

const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const SpanStyle = {
    color: "#0F52BA",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const Text2 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px"
}

const Text3 = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px"
}

function UploadSec({ formData, updateFormData, HandleTabclick, activeTab }) {

    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 5) {
            alert("Please select only 5 images or 1 video");
            return;
        }

        const validFiles = acceptedFiles.filter(file => {
            const isValidType = file.type.startsWith('image/') || file.type.startsWith('video/');
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB

            if (!isValidType) {
                alert(`Invalid file type: ${file.name}`);
            } else if (!isValidSize) {
                alert(`File size exceeds 10MB: ${file.name}`);
            }

            return isValidType && isValidSize;
        });

        if (validFiles.length !== acceptedFiles.length) {
            return;
        }

        const selectedFiles = validFiles.map((file, index) => ({
            id: index,
            key: file.name,
            contentType: file.type,
            data: URL.createObjectURL(file),
            isProfile: false
        }));

        validFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                updateFormData({
                    ...formData,
                    upload: {
                        ...formData.upload,
                        images: [...selectedFiles],
                        bufferdata: URL.createObjectURL(file)
                    }
                });

                HandleTabclick(activeTab + 1);
            };

            reader.readAsArrayBuffer(file);
        });
    }, [dispatch, formData, updateFormData, HandleTabclick, activeTab]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <>
            <div className='w-full h-full grid place-items-center'>
                <div className='max-w-[1900px] pt-[100px]'>
                    <div className='p-2 ml-[10px]'>
                        <div className='pb-[20px]'>
                            <h1 style={Text1}>Almost Done! <span style={SpanStyle}>Upload Photos</span></h1>
                        </div>
                        <div className='rounded-[10px] grid place-items-center w-[300px] sm:w-[100%] md:w-[650px] lg:w-[1120px] h-[327px] bg-[#F5F5F5]'>
                            <div {...getRootProps()} className='w-[250px] lg:w-[346px] h-[67px]'>
                                <input {...getInputProps()} className="hidden" />
                                <div className='w-full grid place-items-center mt-[-10%] mb-[10%]'>
                                    <img alt='upload' src='./loginassests/register-icons/Drag-Drop.svg' />
                                </div>
                                <h1 className='text-[15px] lg:text-[24px]' style={Text2}>Select Photos (5) or Video (1)
                                    <span className='text-[16px]' style={Text3}> Or drag and drop a file</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UploadSec);
