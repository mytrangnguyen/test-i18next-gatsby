import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReadMoreStyles, { ModalShowAllStyles } from './styles';

const ELLIPSES = '…';

const ReadMore = ({
  // numberOfLines,
  readMoreCharacterLimit,
  text,
  readMoreText,
  title,
}) => {
  const [isModalShowAllVisible, setVisibleModalShowAll] = useState(false);

  const toggleModalShowAll = () => {
    setVisibleModalShowAll(!isModalShowAllVisible);
  };

  const getReadMoreParts = () => {
    let teaserText;
    let remainingText;
    const remainingWordsArray = [];

    if (text) {
      const teaserWordsArray = text?.split(' ');

      while (teaserWordsArray.join(' ').length > readMoreCharacterLimit) {
        remainingWordsArray.unshift(teaserWordsArray.pop());
      }

      teaserText = teaserWordsArray.join(' ');

      if (remainingWordsArray.length > 0) {
        remainingText = remainingWordsArray.join(' ');
      }
    }

    return {
      teaserText,
      remainingText,
    };
  };

  const getText = (showAll = false) => {
    const { teaserText, remainingText } = getReadMoreParts();

    if (!showAll && text?.length > readMoreCharacterLimit) {
      return (
        <span className="text-pre-wrap">
          <span className="teaser-text">{teaserText}</span>
          <span className="read-more__text--remaining read-more__text--hide">
            {remainingText}
          </span>
          {ELLIPSES}
        </span>
      );
    }

    return (
      <span className="text-pre-wrap">
        <span className="teaser-text">{teaserText}</span>
        <span className="read-more__text--remaining read-more__text--show">
          &nbsp;
          {remainingText}
        </span>
      </span>
    );
  };

  /** START Fix show all content in a model */

  const getActionButton = () => {
    return (
      <button
        onClick={toggleModalShowAll}
        className="read-more__button"
        type="button"
      >
        {readMoreText}
      </button>
    );
  };

  /** END Fix show all content in a model */

  const isShowReadMore = text?.length > readMoreCharacterLimit;

  const textToDisplay = getText();
  const actionButton = isShowReadMore ? getActionButton() : null;

  return (
    <ReadMoreStyles className="read-more">
      {textToDisplay}
      {actionButton}
      <ModalShowAllStyles
        visible={isModalShowAllVisible}
        title={title}
        onCancel={toggleModalShowAll}
        footer={null}
      >
        <div className="modal-show-all-body">{getText(true)}</div>
      </ModalShowAllStyles>
    </ReadMoreStyles>
  );
};

ReadMore.propTypes = {
  readMoreCharacterLimit: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
  readMoreText: PropTypes.string,
};

ReadMore.defaultProps = {
  readMoreCharacterLimit: 255,
  readMoreText: 'read more',
};

export default ReadMore;
