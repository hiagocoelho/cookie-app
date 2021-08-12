import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #dc602e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.75rem;

  section {
    margin-right: 2rem;
  }

  p {
    margin: 0 0.5rem;
    font-size: 18px;
    color: white;
  }

  img {
    width: 128px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <section>
        <Image
          src="/../public/cookies-icon.png"
          width={'76'}
          height={'76'}
          alt="Cookie icon"
        />
      </section>
      <Link href="/list" passHref>
        <p>Todas as receitas</p>
      </Link>
      <Link href="/results" passHref>
        <p>Resultados finais</p>
      </Link>
      <Link href="/new" passHref>
        <p>Comece uma receita</p>
      </Link>
    </Container>
  );
};

export default Header;
