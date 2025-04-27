import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import * as S from './styles';



export function Home() {
  return (
    <main>
      <S.Banner>
        <h1>Bem-vindo(a)!</h1>
      </S.Banner>
      <S.Container>
        <S.Content>
          <CategoriesCarousel/>
          <OffersCarousel/>            
        </S.Content>
      </S.Container>
    </main>
  );
}
