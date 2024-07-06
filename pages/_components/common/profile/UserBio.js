import { useRouter } from 'next/router';

const ShowMore = ({ text, userid ,  maxLength = 100, className = '' }) => {

  const router = useRouter();
  const toggleShowMore = () => {
    router.push(`dashboard/${userid}`)
  };

  const truncatedText = text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className={`mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px] ${className}`}>
      <p className="text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]">
        {truncatedText}
        {text?.length > maxLength && (
           <span className="cursor-pointer underline text-[#0F52BA] cursor-pointer" onClick={toggleShowMore}>
            {'more'}
          </span>
        )}
      </p>
    </div>
  );
};

export default ShowMore;
