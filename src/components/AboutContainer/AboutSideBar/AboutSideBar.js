import React from 'react';
import useStyles from './AboutSideBar.styles';
import { PropTypes } from 'prop-types';
import { useMediaQuery, Link } from '@material-ui/core';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const AboutSideBar = ({ selected, setSelected }) => {
  const {
    container,
    choicesContainer,
    xsChoicesContainer,
    menuOption,
    selectedMenuOption,
    arrow,
    scrollMenuIcon,
  } = useStyles();
  const isMobile = useMediaQuery('(max-width: 798px)');
  const isXsMobile = useMediaQuery('(max-width:490px)');

  const optionLabels = ['What We Do', 'Who We Are', 'Programs', 'Get Involved'];

  const options = optionLabels.map(label => {
    const handleClick = () => {
      setSelected(label);
    };
    const isSelected = selected === label;

    return (
      <Link
        key={label}
        {...{
          href: '#',
          underline: 'none',
          onClick: handleClick,
          'aria-label': label,
          'data-testid': label,
        }}
      >
        <div className={`${menuOption} ${isSelected && selectedMenuOption}`}>
          {label} {isSelected && <ChevronRight className={arrow} />}
        </div>
      </Link>
    );
  });

  return (
    <nav className={container}>
      {isXsMobile ? (
        <section className={xsChoicesContainer}>
          <ScrollMenu
            data={options}
            arrowLeft={<ChevronLeft className={scrollMenuIcon} />}
            arrowRight={<ChevronRight className={scrollMenuIcon} />}
          />
        </section>
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
