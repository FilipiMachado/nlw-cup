/* interface HomeProps {
  count: number;
} */

import Image from "next/image";
import appPreviewImg from "../assets/web-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExample from "../assets/avatars-example.png";
import iconCheckImg from "../assets/check-icon.svg";

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="logo image" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExample} alt="logo image" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input
            type="text"
            required
            placeholder="Qual é o nome do seu bolão?"
          />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+2034</span>
              <span>Bolões criados!</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados!</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="img preview" quality={100} />
    </div>
  );
}

/* export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
}; */
