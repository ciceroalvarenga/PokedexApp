import styled from 'styled-components/native';

type PropsContainerIcon = {
  paddingHorizontal?: number;
};

export const ContainerIcon = styled.View<PropsContainerIcon>`
  padding: ${({paddingHorizontal}) => `${paddingHorizontal}px`} 0;
`;
