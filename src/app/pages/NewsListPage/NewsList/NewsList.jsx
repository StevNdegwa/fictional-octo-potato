import PropTypes from "prop-types";
import { NewsItemDetails } from "./NewsItemDetails";
import { NewsListPageItem, NewsListWrapper } from "./styles";

export function NewsList({ list }) {
  return (
    <NewsListWrapper>
      {list.map((item) => (
        <NewsListPageItem key={item.id}>
          <h3>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </h3>
          <NewsItemDetails
            points={item.score}
            articleby={item.by}
            noOfComments={item.descendants}
            time={item.time}
          />
        </NewsListPageItem>
      ))}
    </NewsListWrapper>
  );
}

NewsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
};
