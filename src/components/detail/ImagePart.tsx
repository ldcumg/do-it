import { IMAGE_MAX_SIZE } from '@/src/constants';
import { koreanRegex } from '@/src/regex';
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
    <span className='lg:max-w-[384px] w-full h-[311px] border-2 border-dashed border-slate-300 bg-slate-50 rounded-[24px] relative'>
      <img
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        src={
          imageInput
            ? URL.createObjectURL(imageInput)
            : imageSrc || '/images/empty_image.svg'
        }
        alt='todo image'
      />
      <span className='absolute right-[16px] bottom-[16px]'>
        <input
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            if (file.size > IMAGE_MAX_SIZE) {
              alert('파일은 5MB 이하만 업로드 가능합니다.');

              return;
            }

            if (koreanRegex.test(file.name || '')) {
              alert('한글 파일명은 업로드할 수 없습니다.');
              return;
            }

            setImageInput(file);
          }}
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
