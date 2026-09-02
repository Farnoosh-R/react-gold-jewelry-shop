import TitleAccent from "../../../../components/shared/TitleAccent";

const NewArrivals = () => {
  return (
    <section id="new-arrivals">
      <div className="app-container flex flex-col">
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="text-[var(--color-secondary)]/40 tracking-[10px]">
          New Arrivals
        </div>
        <h2 className="text-[var(--color-secondary)]">جدیدترین ها</h2>
        <TitleAccent />
      </div>
      </div>
    </section>
  );
};
export default NewArrivals;
