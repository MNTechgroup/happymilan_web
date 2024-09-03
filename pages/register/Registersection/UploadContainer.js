import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import { connect, useDispatch } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser';

function UploadContainer({ formData, updateFormData }) {

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

            };

            reader.readAsArrayBuffer(file);
        });
    }, [dispatch, formData, updateFormData]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    return (
        <>
            <div>
                <div {...getRootProps()} className="w-[115px] h-[117px] border-dashed border-[1px] border-[#D0D0D0] rounded-[10px] grid place-items-center">
                    <input {...getInputProps()} className="hidden" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.11698 10.8333H0.0898438V9.16667H9.11698V0H10.7583V9.16667H19.7854V10.8333H10.7583V20H9.11698V10.8333Z" fill="#5F6368" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UploadContainer);
