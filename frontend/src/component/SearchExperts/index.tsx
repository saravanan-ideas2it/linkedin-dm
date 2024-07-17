const SearchExperts = () => {
  return (
    <input
      className="font-quicksand text-sm font-medium w-full h-10 border rounded-md outline-none px-2 mt-1"
      style={{
        boxShadow: "0px 4px 8px 0px #6A707C1A inset",
        borderColor: "#C3C6CB",
        color: "#084649",
      }}
      type="text"
      id="search-experts-input"
      placeholder="Search Experts"
    />
  );
};

export default SearchExperts;
