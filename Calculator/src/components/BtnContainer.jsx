const BtnContainer = ({ btnclick }) => {
  const BtnTxt = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div id="btn_container" class="mt-4 grid grid-cols-3 gap-3">
      {BtnTxt.map((buttonname) => (
        <button
          onClick={btnclick}
          className="bg-slate-400 text-xl w-full font-bold text-slate-900 p-2 rounded"
        >
          {buttonname}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
