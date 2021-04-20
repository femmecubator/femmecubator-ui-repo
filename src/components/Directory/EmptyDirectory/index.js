import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './EmptyDirectory.styles';
import { Card, Typography, useMediaQuery } from '@material-ui/core';

const EmptyDirectory = ({ mainLabel, subLabel, options }) => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const { bannerContainer, mainText, subText, optionsContainer } = useStyles({
    isMobile,
  });
  const renderOptions = () => options.map(item => <li key={item}> {item} </li>);

  return (
    <Card className={bannerContainer} variant="outlined">
      <Typography
        {...{
          className: mainText,
          variant: 'h2',
          align: 'center',
          'data-testid': 'mainText',
        }}
      >
        {mainLabel}
      </Typography>
      <Typography
        {...{
          className: subText,
          variant: 'body1',
          align: 'center',
          'data-testid': 'subText',
        }}
      >
        {subLabel}
      </Typography>
      <ul className={optionsContainer} data-testid="optionsContainer">
        {renderOptions()}
      </ul>
    </Card>
  );
};

EmptyDirectory.propTypes = {
  mainLabel: PropTypes.string.isRequired,
  subLabel: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default EmptyDirectory;
