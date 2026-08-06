import type { TodoType } from '@/src/types';
import React, { useEffect, useState } from 'react';

interface ImagePartProps {
  todoData: TodoType;
  imageInput: File | null;
  setImageInput: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImagePart = ({ todoData, imageInput, setImageInput }: ImagePartProps) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const imageUrl = todoData.imageUrl;

    if (!imageUrl) return;

    let url = '';

    (async () => {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const imageBlob = new Blob([blob], {
        type: 'image/svg+xml',
      });

      url = URL.createObjectURL(imageBlob);

      setImageSrc(url);
    })();

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [todoData.imageUrl]);

  return (
    <span>
      <img
        src={
          imageInput
            ? URL.createObjectURL(imageInput)
            : imageSrc || '/images/empty_image.svg'
        }
        alt='todo image'
      />
      <span>
        <input
          onChange={(e) => setImageInput(e.target.files?.[0] || null)}
          id='image-edit'
          type='file'
          className='hidden'
        />
        <label htmlFor='image-edit' className='cursor-pointer'>
          <img
            src={
              imageInput || todoData.imageUrl
                ? '/icons/edit_circle.svg'
                : '/icons/plus_circle.svg'
            }
            alt='image edit'
          />
        </label>
      </span>
    </span>
  );
};

export default ImagePart;
