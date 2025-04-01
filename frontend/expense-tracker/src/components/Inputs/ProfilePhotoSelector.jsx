import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6 relative">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-24 h-24 flex items-center justify-center bg-purple-100 rounded-full relative overflow-visible">
          {/* User Icon */}
          <LuUser className="text-4xl text-purple-500" />

          {/* Upload Button */}
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2 shadow-md"
            onClick={onChooseFile}
          >
            <LuUpload className="text-lg" />
          </button>
        </div>
      ) : (
        <div className="relative">
          {/* Preview Image */}
          <img
            src={previewUrl}
            alt="Profile Photo"
            className="w-24 h-24 rounded-full object-cover"
          />
          {/* Remove Button */}
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2 shadow-md"
            onClick={handleRemoveImage}
          >
            <LuTrash className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
