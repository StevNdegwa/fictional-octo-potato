import PropTypes from "prop-types";
import { PageWrapper, PageMain, PageFooter, PageHeader } from "./styles";

export function PageLayout({ children, title }) {
  return (
    <PageWrapper>
      <PageHeader>{title}</PageHeader>
      <PageMain>{children}</PageMain>
      <PageFooter>&copy;{new Date().getFullYear()}</PageFooter>
    </PageWrapper>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
};
