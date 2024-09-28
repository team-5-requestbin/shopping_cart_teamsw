import Image from "../assets/404.webp";

const FourOhFour = () => {
  return (
    <div>
      <img src={Image} alt="404 Error" />
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Refresh Page
      </button>
    </div>
  );
};

export default FourOhFour;