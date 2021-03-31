// eslint-disable no-use-before-define
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 300px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [topSkills[1]],
    multiple: true,
    options: topSkills,
    getOptionLabel: (option) => option.title,
  });

  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>
            Skills (eg. tech stack, anything you can offer help with.)
          </Label>
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
            {value.map((option, index) => (
              <Tag
                label={option.title}
                key={option.id}
                {...getTagProps({ index })}
              />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li key={option.id} {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
  );
}

const topSkills = [
  { title: 'Algorithms' },
  { title: 'Analytical Skills' },
  { title: 'Big Data' },
  { title: 'Calculating' },
  { title: 'Compiling Statistics' },
  { title: 'Data Analytics' },
  { title: 'Data Mining' },
  { title: 'Database Design' },
  { title: 'Database Management' },
  { title: 'Documentation' },
  { title: 'Modeling' },
  { title: 'Modification' },
  { title: 'Needs Analysis' },
  { title: 'Quantitative Research' },
  { title: 'Quantitative Reports' },
  { title: 'Statistical Analysis' },
  { title: 'Applications' },
  { title: 'Configuration' },
  { title: 'Debugging' },
  { title: 'Development' },
  { title: 'Design' },
  { title: 'Hardware' },
  { title: 'Information Technology' },
  { title: 'Network Architecture' },
  { title: 'Networking' },
  { title: 'Operating Systems' },
  { title: 'Security' },
  { title: 'Servers' },
  { title: 'Software' },
  { title: 'Storage' },
  { title: 'Technical Support' },
  { title: 'Testing' },
  { title: 'Tools' },
  { title: 'Systems Analysis' },
  { title: 'Troubleshooting' },
  { title: 'Usability' },
  { title: 'Engineering' },
  { title: 'Performance Review' },
  { title: 'Programming' },
  { title: 'Project Planning' },
  { title: 'Quality Control' },
  { title: 'Task Management' },
  { title: 'Blogging' },
  { title: 'Digital Media' },
  { title: 'Social Media Platforms' },
  { title: 'Web Analytics' },
  { title: 'Research' },
  { title: 'Technical Documentation' },
  { title: 'Facebook' },
  { title: 'Facebook' },
];
