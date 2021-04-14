import React from 'react';
import useStyles from './AboutSideBar.styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import { MOBILE_MEDIA_QUERY } from 'utils/constants';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const AboutSideBar = ({ selected, setSelected }) => {
  const {
    container,
    choicesContainer,
    menuOption,
    selectedMenuOption,
    arrow,
  } = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const isXsMobile = useMediaQuery('(max-width:490px)');

  const optionLabels = ['What We Do', 'Who We Are', 'Programs', 'Get Involved'];

  const options = optionLabels.map((label) => {
    const handleClick = () => {
      if (label === 'Get Involved') history.push('/volunteer');
      setSelected(label);
    };
    const isSelected = selected === label;

    return (
      <Link key={label} {...{ underline: 'none', onClick: handleClick }}>
        <div className={`${menuOption} ${isSelected && selectedMenuOption}`}>
          {label} {isSelected && <ChevronRightIcon className={arrow} />}
        </div>
      </Link>
    );
  });

  return (
    <nav className={container}>
      {isXsMobile ? (
        <ScrollMenu
          data={options}
          arrowLeft={<ChevronLeftIcon />}
          arrowRight={<ChevronRightIcon />}
        />
      ) : (
        <section className={choicesContainer}>{options}</section>
      )}
      {isMobile && !isXsMobile && <hr />}
    </nav>
  );
};

AboutSideBar.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default AboutSideBar;
