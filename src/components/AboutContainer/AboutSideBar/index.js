import { React, useState } from 'react';
import useStyles from './AboutSideBar.styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const AboutSideBar = () => {
  const { container, menuOption, selectedMenuOption, arrow } = useStyles();
  const [selected, setSelected] = useState('What We Do');
  const history = useHistory();

  const optionLabels = ['What We Do', 'Who We Are', 'Programs', 'Get Involved'];

  const options = optionLabels.map((label) => {
    const handleClick = () => {
      if (label === 'Get Involved') history.push('/volunteer');
      setSelected(label);
    };

    return (
      <Link key={label} {...{ underline: 'none', onClick: handleClick }}>
        <li
          className={`${menuOption} ${
            selected === label && selectedMenuOption
          }`}
        >
          {label} {selected === label && <ChevronRightIcon className={arrow} />}
        </li>
      </Link>
    );
  });

  return <nav className={container}>{options}</nav>;
};

export default AboutSideBar;
