
const Footer = () => {
  const react="(React.js)";

  return (
    
    <footer className="flex flex-col items-center justify-center bg-[#171717] text-white p-4 mt-4 h-[60px] text-sm">
      <div>
        <p>&copy; 2025 Girdhari. All rights reserved.</p>
      </div>

      <div className="flex gap-4">
        <a className="text-red-600 hover:text-green-500" href="">IDN</a>
        <a className="text-white hover:text-green-500" href="">Portfolio  {react}</a>
      </div>
    </footer>
  );
};

export default Footer;
