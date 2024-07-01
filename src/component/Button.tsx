interface IButtonProps {
  title: string;
  backgroundColor: string;
  color: string;
  width: string;
  height: string;
}

function Button(props: IButtonProps) {
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    width: props.width,
    height: props.height,
  };
  return (
    <button className="button" style={buttonStyle}>
      {props.title}
    </button>
  );
}

export default Button;
//props bntuknya object
//Cuma bisa nerima 1 parameter, dan namanya harus props
//interface utk menyiapkan tipe datanya apa utk props
//di react cuma bisa inline styling dan external styling
// kalau di html hanya class kalau di react className
//di dlm react js kalau atribut berisi string, boleh langsung pakai quotes
//style menerima bentuk object dalam react js
//kalau mau nulis tipe data lain selain string maka harus diawali {}
/**
 * bisa ditulis
 * const styleButton ={
 * color: "white"
 * }
 * <button style= {styleButton}>
 */
