const EmptyCart = () => {
  return (
    <div
      style={{ marginTop: "20px" }}
      className="flex flex-col items-center justify-center mx-auto"
    >
      <svg
        className="xqknn vdgjn pvi3v i2zc4 t4wtn "
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <path d="M3 6h18"></path>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
      <p className="text-gray-700 mt-1">Your cart is empty</p>
    </div>
  );
};

export default EmptyCart;
