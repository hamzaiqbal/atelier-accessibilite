import { useMemo, useState } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
  text-align: center;
`;

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const Figure = styled.figure`
  flex: 1;
  order: 1;
  margin: 0;
  text-align: center;

  img {
    max-width: 100%;
  }
`;

const Form = styled.form`
  flex: 1;
  order: 2;
`;

const Label = styled.h2`
  color: ${({ theme }) => theme.colors.greylight};
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const Input = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: ${({ theme }) => `1px solid ${theme.colors.greylight}`};
  border-radius: 5px;
  padding: 5px 10px;
  height: 50px;
  width: 100%;

  &.invalid {
    border-color: ${({ theme }) => theme.colors.failure};
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 10px;
  margin: 40px 0 0;
  border-radius: 5px;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;

  &[disabled] {
    opacity: 0.5;
  }
`;

const Message = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 40px;
  text-align: center;

  &.success {
    background: ${({ theme }) => theme.colors.success};
  }

  &.failure {
    background: ${({ theme }) => theme.colors.failure};
  }
`;

export const Tomatoes = () => {
  const answer = '8';

  const [userAnswer, setUserAnswer] = useState('');
  const [hasWon, setHasWon] = useState(false);
  const [tries, setTries] = useState(0);

  const formSubmit = () => {
    if (answer === userAnswer) {
      setHasWon(true);
      return;
    }

    setTries(tries + 1);
  };

  const isInvalid = useMemo(() => answer !== userAnswer && tries > 0, [answer, userAnswer, tries]);

  const hasLost = useMemo(() => tries > 2, [tries]);


  return (
    <>
      <Title>Qui veut gagner des tomates ?</Title>

      {hasLost && <Message className="failure">3 mauvaises tentatives : Vous avez perdu !</Message>}

      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
        >
          <Label>Entrez le nombre de tomates vertes et gagnez des tomates à vie !</Label>

          {hasWon && <Message className="success">Bravo, vous avez gagné !</Message>}

          {!hasWon && (
            <>
              <Input
                className={`${isInvalid ? 'invalid' : ''}`}
                onChange={(e) => setUserAnswer(e.target.value)}
                name="answer"
                type="number"
              />

              <Button disabled={userAnswer === '' || hasLost} type="submit">
                OK
              </Button>
            </>
          )}
        </Form>

        <Figure>
          <img src="/atelier-accessibilite/assets/tomatoes.jpg" alt="" />
        </Figure>
      </Container>
    </>
  );
};
