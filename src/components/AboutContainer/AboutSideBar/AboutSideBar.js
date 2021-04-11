import React from 'react';
import useStyles from './AboutSideBar.styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const AboutSideBar = ({ selected, setSelected }) => {
  const { container, menuOption, selectedMenuOption, arrow } = useStyles();
  const history = useHistory();

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

  return <nav className={container}>{options}</nav>;
};

AboutSideBar.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default AboutSideBar;
