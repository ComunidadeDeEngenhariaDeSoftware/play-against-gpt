function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-4 text-4xl border-solid h-36 w-64 border-black p-16 m-1 rounded-3xl "
    >
      {value}
    </button>
  );
}

export default Square;
