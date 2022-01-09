import PropTypes from "prop-types";
import { DetailsWrapper } from "./styles";

export function NewsItemDetails({ points, articleby, noOfComments }) {
  return (
    <DetailsWrapper>
      {points} points by {articleby} {noOfComments} comments
    </DetailsWrapper>
  );
}

NewsItemDetails.propTypes = {
  points: PropTypes.number,
  articleby: PropTypes.string,
  noOfComments: PropTypes.number,
};
