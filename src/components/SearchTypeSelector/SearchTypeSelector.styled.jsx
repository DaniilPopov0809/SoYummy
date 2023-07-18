import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    gap: 18px;
  }
`;

export const SelectName = styled.p`
  align-self: top;
  padding: 10px 0;
  color: var(--page-title-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 8px 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    padding: 6px 0;
  }
`;
