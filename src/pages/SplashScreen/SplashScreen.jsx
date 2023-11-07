import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bear from "../../components/Splash/Character/Bear";
import Rabbit from "../../components/Splash/Character/Rabbit";
import Dog from "../../components/Splash/Character/Dog";
import Earth from "../../components/Splash/Character/Earth";
import Container from "../../components/Splash/Frame/Container";
import Imagebox from "../../components/Splash/Frame/Imagebox";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/loginStart`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container splashScreen={true}>
      <Imagebox splashScreen={true}>
        <Rabbit splashScreen={true} />
        <Bear splashScreen={true} />
        <Dog splashScreen={true} />
        <Earth splashScreen={true} />
      </Imagebox>
    </Container>
  );
}
