import investmentLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <figure>
        <img src={investmentLogo} alt="Investment Logo" />
      </figure>
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
