const Footer = () => {
  return (
    <div className="bg-gray-500 border-t border-solid border-gray-900 mt-4 py-4">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p className="text-white">
              &copy; <strong>POKEMON</strong>
            </p>
          </div>
          <div className="md:flex-1 md:px-4 text-center md:text-right">
            <a
              href="#"
              className="py-2 px-4 text-white inline-block hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="py-2 px-4 text-white inline-block hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
