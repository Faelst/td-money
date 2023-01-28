import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

type Props = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
