import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <img
            src="https://vivenuve.files.wordpress.com/2022/01/cropped-logotipo-alternativo-cuadrado.png"
            alt="home"
            className="logo"
            height="150" 
            width="150"
          />
        </a>
      </Link>
      <p className="self-center text-primary text-lg font-bold">Nuve food and market</p>
      <button className="snipcart-checkout flex items-center">
        <img height='20px' width='25px' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-primary"></span>
      </button>
    </div>
  );
};

export default Navbar;
