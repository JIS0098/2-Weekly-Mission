import styled from "styled-components";

function Footer() {
  return (
    <FooterLayout>
      <FooterCopyright>©codeit - 2023</FooterCopyright>
      <FooterLinkBox>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/faq.html">FAQ</a>
      </FooterLinkBox>
      <FooterSnsBox>
        <a href="https://www.facebook.com" target="facebook">
          <img src="images/facebook.png" alt="페이스북 아이콘" />
        </a>
        <a href="https://twitter.com/?lang=ko" target="twitter">
          <img src="/images/twitter.png" alt="트위터 아이콘" />
        </a>
        <a href="https://www.youtube.com" target="youtube">
          <img src="/images/youtube.png" alt="유튜브 아이콘" />
        </a>
        <a href="https://www.instagram.com" target="instagram">
          <img src="/images/instagram.png" alt="인스타 아이콘" />
        </a>
      </FooterSnsBox>
    </FooterLayout>
  );
}
const FooterLayout = styled.footer`
  background-color: #111322;
  font-family: Arial;
  font-weight: 400;
  line-height: 1.84rem;
  font-size: 1.6rem;
  padding: 3.2rem 10.4rem 11.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  @media (max-width: 768px) {
    position: relative;
    padding: 3.2rem 3.2rem 10.8rem;
  }
`;

const FooterCopyright = styled.div`
  color: #676767;
  @media (max-width: 768px) {
    position: absolute;
    top: 11rem;
  }
`;

const FooterLinkBox = styled.div`
  color: #cfcfcf;

  & a {
    cursor: pointer;
  }

  & a:nth-child(1) {
    margin-right: 3rem;
  }
`;

const FooterSnsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &a img {
    width: 2rem;
  }
`;

export default Footer;
