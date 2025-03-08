import ImgUsers from "../../assets/users.png";
import { Backgound } from "./styles";

function TopBackground() {
  return (
      <Backgound>
        <img src={ImgUsers} alt="Logo" />
      </Backgound>
  );
}

export default TopBackground;