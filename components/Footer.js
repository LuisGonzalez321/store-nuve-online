const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Todos los derechos reservados por nuve
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://www.instagram.com/nuve_nicaragua/" className="max-w-xs ml-4">
          <img width='25px' height='25px' src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/vivenuve" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
