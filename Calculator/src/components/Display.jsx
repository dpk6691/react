const Display = ({ disValue }) => {
  return (
    <input
      className="w-full rounded text-right p-2 text-3xl"
      id="display"
      type="text"
      value={disValue}
      readOnly
    />
  );
};

export default Display;
