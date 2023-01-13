export const NowButton = ({
  scrollToCurrent,
}: {
  scrollToCurrent: () => void;
}) => {
  return (
    <button
      onClick={() => scrollToCurrent()}
      className="fixed right-10 sm:right-10 md:right-20 lg:right-32 bottom-8 lg:bottom-12 px-7 lg:px-9 py-4 lg:py-5 rounded-lg text-xl lg:text-xxl bg-orange text-textWhite font-semibold"
    >
      NOW
    </button>
  );
};
